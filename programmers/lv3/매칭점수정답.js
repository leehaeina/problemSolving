function solution(word, pages) {
    word = word.toLowerCase();
    const REGEX_WORD = /[\d|\W]/;
    const REGEX_URL = /<a href="https:\S*"/gi;
    const META_URL = "meta property";
    const pageInfo = new Map();

    pages.forEach((page, idx) => {
        const pageArr = page.split("\n");
        const urlIdx = pageArr.findIndex((el) => el.includes(META_URL));
        const pageURL = pageArr[urlIdx].match(/"https:\S*"/gi)[0];
        console.log(pageURL, pageArr[urlIdx]);
        const bodyStart = pageArr.findIndex((el) => el.includes("<body>"));
        const bodyEnd = pageArr.findIndex((el) => el.includes("</body>"));
        const body = pageArr.slice(bodyStart + 1, bodyEnd);
        console.log(
            body,
            body.flatMap((str) => str.match(REGEX_URL))
        );
        const point = body
            .flatMap((str) => str.toLowerCase().split(REGEX_WORD))
            .filter((e) => e === word).length;
        const outLinks = body
            .flatMap((str) => str.match(REGEX_URL)) //body각 줄에 a tag 있는지 확인 없으면 null
            .filter((e) => e) //null 지우기
            .map((e) => e.substr(8, e.length)); //

        pageInfo.set(pageURL, { point, outLinks, idx, matchPoint: 0 });
    });

    for (const [key, value] of pageInfo) {
        const linkPoint = value.point / value.outLinks.length;

        for (const link of value.outLinks) {
            if (pageInfo.has(link)) {
                const origin = pageInfo.get(link);
                const calculatedPoint = origin.matchPoint
                    ? origin.matchPoint + linkPoint
                    : origin.point + linkPoint;
                pageInfo.set(link, { ...origin, matchPoint: calculatedPoint });
            }
        }
    }

    const answer = [];

    for (const [key, value] of pageInfo) {
        const { point, idx, matchPoint } = value;
        const finalPoint = matchPoint ? matchPoint : point;
        answer.push([idx, finalPoint]);
    }

    answer.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

    return answer[0][0];
}
console.log(
    solution("Muzi", [
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
    ])
);
