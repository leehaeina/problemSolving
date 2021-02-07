#include <stdio.h>
#include <stdlib.h>
#pragma warning (disable:4996)

int main() {
   int next_student[13] = { 5,9,13,1,0,0,11,1,7,12,9,9,2 };
   int visited[13] = { 0, };
   int index = 0, max = 0, curr_index=0, curr=0,next_index;
   for (int i = 0; i < 13; i++) {
      curr = 0;
      curr_index = i;
      for (int j = 0; j < 13; j++)
         visited[j] = 0;
      visited[curr_index] = 1;
      while (1) {
         next_index = next_student[curr_index] - 1;
         if (next_student[curr_index] == 0 || visited[next_index]==1)
            break;
         else {
            curr++;
            curr_index = next_index;
            visited[curr_index] = 1;
         }
      }
      if (curr >= max) {
         max = curr;
         index = i;
      }
   }
   printf("%d\n", index+1);
   system("pause");
}