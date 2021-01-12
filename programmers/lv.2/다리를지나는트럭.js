function solution(bridge_length, weight, truck_weights) {
    var num = truck_weights.length;
    var arrived = []; // 도착한 트럭
    var ing = []; // 건너는 중인 트럭 2차원 배열
  
    ing.push([truck_weights.shift(), 1]); // [무게, 시간]
  
    var cnt = 1;
  
    for (var sum = ing[0][0]; arrived.length != num; cnt++) {
      if (sum + truck_weights[0] <= weight) {
        // 트럭의 무게가 다리를 초과하지 않으면
        var truck = truck_weights.shift();
        ing.push([truck, 0]);
        sum += truck;
      }
  
      for (var i = 0; i < ing.length; i++) {
        ing[i][1]++;
        if (ing[i][1] == bridge_length) {
          // 만약 도착햇으면
          sum -= ing[i][0];
          arrived.push(ing.shift());
          i--;
        }
      }
    }
  
    cnt++; // 마지막에 1을 더해줘야 한다
  
    return cnt;
  }