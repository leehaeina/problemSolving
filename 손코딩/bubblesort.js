let arr = [3,1,2,4,6,7,8,5,9];
function bubbleSort(arr)
{
    for(let i =0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-1;j++)
        {
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}


bubbleSort(arr)

function selectionSort(arr){
    for(let i =0;i<arr.length;i++)
    {   
        for(let j =i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}

selectionSort(arr)


function insertionSort(arr){
    for(let i = 0; i<arr.length;i++)
    {
        for(let j = i;j>0;j--)
        {
            if(arr[j]<arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    console.log(arr)
}
insertionSort(arr)

