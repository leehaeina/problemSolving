import java.util.*;
class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Map <String,Integer> map = new HashMap<>();
        for(String complete : completion){
            if(map.get(complete) == null){
                map.put(complete,1);
            }
            else{
                map.put(complete,map.get(complete)+1);
            }
        }
        for(String participate : participant){
            //System.out.println(participate);
            if(map.get(participate) == null || map.get(participate) == 0  ){
                answer = participate;
            }
            else{
                
                map.put(participate,map.get(participate)-1);
            }
        }
        //System.out.println(map)
        return answer;
    }
}