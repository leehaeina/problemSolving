function mergeSort(arr) {
    // 재귀함수 탈출조건 단일 요소로 구성된 배열이라면, 리턴
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2); // 배열의 중간 값
    const left = arr.slice(0, middle); // left side items
    const right = arr.slice(middle); // right side items

    return merge(mergeSort(left), mergeSort(right));
}

// 배열을 비교하고, 연결된 결과를 리턴한다.
function merge(left, right) {
    console.log(left, right);
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // left items와 right items 비교
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
