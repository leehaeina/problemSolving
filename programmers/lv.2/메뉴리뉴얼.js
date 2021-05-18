function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) {
    return arr.map((x) => [x]);
  } else {
    arr.forEach((element, idx) => {
      let fixer = element;
      let restArr = arr.slice(idx + 1);
      let combinationArr = combination(restArr, selectNum - 1);
      let combined = combinationArr.map((x) => [fixer, ...x]);
      result.push(...combined);
    });
  }
  return result;
}
function inputMap(map, menuList) {
  menuList.reduce((_, menu) => {
    menu = menu.sort().join("");
    if (map[menu]) {
      map[menu]++;
    } else {
      map[menu] = 1;
    }
  }, []);
  return map;
}
function solution(orders, course) {
  var answer = [];
  let mapArr = Array(course.length).fill({});
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      mapArr[j] = {
        ...inputMap(
          { ...mapArr[j] },
          combination(orders[i].split(""), course[j])
        ),
      };
    }
  }
  for (let i = 0; i < mapArr.length; i++) {
    let max = Math.max(...Object.values(mapArr[i]));
    answer.push(
      ...Object.entries(mapArr[i])
        .filter((x) => x[1] === max && x[1] > 1)
        .map((x) => x[0])
    );
  }
  return answer.sort();
}
