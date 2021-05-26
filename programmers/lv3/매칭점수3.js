function solution(word, pages) {
    var answer = 0;
    let max = 0;
    //*
    //mylink, score,linkscore,outlink
    word = word.toLowerCase();

    let pageArr = new Array(pages.length);
    for (let i = 0; i < pageArr.length; i++) {
        pageArr[i] = {
            index: 0,
            mylink: [],
            basicscore: [],
            linkscore: [],
            outlink: [],
        };
    }
    pages.reduce((acc, page, idx) => {
        pageArr[idx].index = idx;
        let tags = page.split("\n");
        let metaIndex = tags.findIndex((x) =>
            x.includes('meta property="og:url" content=')
        );
        let meta = tags[metaIndex].match(/"https:\S*"/gi)[0];
        let bodyopen = tags.findIndex((x) => x.includes("<body>"));
        let bodyclose = tags.findIndex((x) => x.includes("</body>"));
        let body = tags.slice(bodyopen + 1, bodyclose);
        const point = body
            .flatMap((str) => str.toLowerCase().split(/[\d|\W]/))
            .filter((e) => e === word).length;
        const outLinks = body
            .flatMap((str) => str.match(/<a href="https:\S*"/gi)) //body각 줄에 a tag 있는지 확인 없으면 null
            .filter((e) => e) //null 지우기
            .map((e) => e.substr(8, e.length));
        pageArr[idx].mylink.push(meta);
        pageArr[idx].outlink.push(...outLinks);
        pageArr[idx].basicscore = point;
        // while (body.includes('<a href="')) {
        //     let start = body.indexOf('<a href="');
        //     let last = body.indexOf('">');
        //     let arr = body.split("");
        //     let link = arr.splice(start, last - start + 2, "");
        //     body = arr.join("");
        //     pageArr[idx].outlink.push(link.join("").split('"')[1]);
        // }
        // body = body.replace(/[^a-zA-Z]/g, " ");
        // let regex = new RegExp(`\\b${word}\\b`, "gi");
        // if (body.match(regex)) pageArr[idx].basicscore = body.match(regex);
    }, []);

    for (let i = 0; i < pageArr.length; i++) {
        let link = pageArr[i].mylink;
        pageArr[i].count = pageArr
            .filter(
                (x, idx) =>
                    idx !== i && x.outlink.indexOf(pageArr[i].mylink[0]) !== -1
            )
            .map((x) => x.index);
        pageArr[i].linkscore =
            pageArr[i].basicscore / pageArr[i].outlink.length;
    }
    for (let i = 0; i < pageArr.length; i++) {
        let sum = 0;
        pageArr[i].count.forEach((x) => {
            sum += pageArr[x].linkscore;
        });
        sum += pageArr[i].basicscore;
        if (sum > max) {
            max = sum;
            answer = pageArr[i].index;
        }
    }

    return answer;
}
