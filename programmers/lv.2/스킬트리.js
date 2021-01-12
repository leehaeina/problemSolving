function solution(skill, skill_trees) {
    let newArr = skill.split("");
    let str = 0;
    let count = 0;
    for (let i = 0; i < skill_trees.length; i++) {
      str = skill_trees[i]
        .split("")
        .filter((element) => newArr.includes(element))
        .join("");
      console.log(str);
      console.log("sub", skill.substring(0, str.length));
      if (str === skill.substring(0, str.length)) {
        count++;
      }
    }
    return count;
  }