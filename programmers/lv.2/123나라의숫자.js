function solution(n) {
    var answer='';
    while (n > 0) {
      const div = n % 3;
  
      n = parseInt(n / 3);
  
      if (div === 0) {
        answer='4'+answer;
        n--;
      } else {
        answer=div+answer;
      }
    }
   
  
    return answer;
  }