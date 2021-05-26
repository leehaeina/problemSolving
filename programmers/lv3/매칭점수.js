function solution(word, pages) {
    var answer = 0;
    let max = 0;
    //*
    //mylink, score,linkscore,outlink
    word = word.toLowerCase();

    let pageArr = new Array(pages.length);
    for (let i = 0; i < pageArr.length; i++) {
        pageArr[i] = {
            mylink: [],
            basicscore: [],
            linkscore: [],
            outlink: [],
            index: 0,
        };
    }
    pages.reduce((acc, page, idx) => {
        pageArr[idx].index = idx;
        let meta = page.split('meta property="og:url" content=')[1];
        let body = page.split("<body>")[1].split("</body>")[0];
        body = body.replace(/<\/a>/g, " ");
        pageArr[idx].mylink.push(meta);
        while (body.includes('<a href="')) {
            let start = body.indexOf('<a href="');
            let last = body.indexOf('">');
            let arr = body.split("");
            let link = arr.splice(start, last - start + 2, "");
            body = arr.join("");
            pageArr[idx].outlink.push(link.join("").split('"')[1]);
        }
        body = body.replace(/[^a-zA-Z]/g, " ");
        let regex = new RegExp(`\\b${word}\\b`, "gi");
        if (body.match(regex)) pageArr[idx].basicscore = body.match(regex);
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
