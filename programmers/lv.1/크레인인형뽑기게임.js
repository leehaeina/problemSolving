function solution(board, moves) {
    let answer = 0;
    let temp;
    let moved=[];
    for(let i =0;i<moves.length;i++)
        {
            for(let j = 0 ; j<board.length;j++)
                {
                    if(board[j][moves[i]-1]!=0)
                        {
                            temp = board[j][moves[i]-1];
                            board[j][moves[i]-1] = 0;
                            if(moved[moved.length-1]===temp) 
                            {   answer++;
                                moved.pop();
                             break;
                            }
                            else{
                                moved.push(temp);
                                break;
                            }
                        }
                            
                        
                }
            
            
        }
    return answer*2;
}