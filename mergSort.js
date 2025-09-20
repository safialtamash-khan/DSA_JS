function mergeSortIterative(arr) {
    const n = arr.length;
    let temp = [...arr]; // temporary array
  
    for (let size = 1; size < n; size *= 2) {
      for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
        let mid = Math.min(leftStart + size, n);
        let rightEnd = Math.min(leftStart + 2 * size, n);
        merge(arr, temp, leftStart, mid, rightEnd);
      }
      arr = [...temp]; // Copy back for next round
    }
  
    return arr;
  }
  
  function merge(arr, temp, left, mid, right) {
    let i = left,
        j = mid,
        k = left;
  
    while (i < mid && j < right) {
      if (arr[i] <= arr[j]) temp[k++] = arr[i++];
      else temp[k++] = arr[j++];
    }
  
    while (i < mid) temp[k++] = arr[i++];
    while (j < right) temp[k++] = arr[j++];
  }
// ==========================================


function merge(arr, left, mid, right) {
    let n1 = mid - left + 1; // Size of left subarray
    let n2 = right - mid;    // Size of right subarray
  
    let L = [], R = [];
  
    // Copy data to temp arrays
    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
  
    let i = 0, j = 0, k = left;
  
    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
    }
  
    // Copy remaining elements of L[]
    while (i < n1) arr[k++] = L[i++];
  
    // Copy remaining elements of R[]
    while (j < n2) arr[k++] = R[j++];
  }
  
  function mergeSortIterative(arr) {
    let n = arr.length;
  
    // Current size of subarrays to be merged
    for (let currSize = 1; currSize < n; currSize *= 2) {
      // Pick starting point of left subarray
      for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
        let mid = Math.min(leftStart + currSize - 1, n - 1);
        let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
  
        console.log(`\nMerging: arr[${leftStart}..${mid}] and arr[${mid + 1}..${rightEnd}]`);
        merge(arr, leftStart, mid, rightEnd);
        console.log("Current Array:", arr.slice());
      }
    }
  
    return arr;
  }
  
  // Run the sort
  const input = [6, 3, 7, 1, 5, 2];
  console.log("Original:", input);
  const sorted = mergeSortIterative(input);
  console.log("Sorted:", sorted);
  