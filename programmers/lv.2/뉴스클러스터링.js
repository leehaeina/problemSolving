function solution(str1, str2) {
  var answer = 0;
    let a = str1
      .split("")
      .map((x, i, a) => [a[i], a[i + 1]].join("").toLowerCase())
      .filter((x) => x.match(/[a-z]{2}/g));
    let b = str2
      .split("")
      .map((x, i, a) => [a[i], a[i + 1]].join("").toLowerCase())
      .filter((x) => x.match(/[a-z]{2}/g));
 

  console.log(a, b);
  let objA = new Map();
  let objB = {};
  let setA = new Set(a);
  let setB = new Set(b);
  a.forEach((x) => {
    if (objA.has(x)) objA.set(x, objA.get(x) + 1);
    else objA.set(x, 1);
  });
  b.forEach((x) => {
    if (objB[x]) objB[x]++;
    else objB[x] = 1;
  });
  let filtered = [...setA].filter((x) => setB.has(x));
  let intersection = [...filtered];
  let union = [...new Set([...setA, ...setB])];
  intersection.forEach((e) => {
    for (let i = 0; i < Math.min(objA.get(e) || 0, objB[e] || 0) - 1; i++)
      intersection.push(e);
  });
  union.forEach((e) => {
    console.log(objA.get(e), objB[e], e);
    for (let i = 0; i < Math.max(objA.get(e) || 0, objB[e] || 0) - 1; i++)
      union.push(e);
  });
  console.log(intersection, union);
  if (intersection.length === 0 && union.length === 0) answer = 1;
  else answer = Math.floor((intersection.length / union.length) * 65536);
  return answer;
}

console.log(solution("FRANCE", "french"));
