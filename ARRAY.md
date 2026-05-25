### First Largest element
### Second Largest Element
```JS
class Solution {
    public int getSecondLargest(int[] arr) {
        // code here
        int firstLargest = -1;
        int secondLargest = -1;
        
        // TC: O(N);
        // SC: O(1);
        for(int i = 0; i< arr.length; i++){
            if(arr[i] > firstLargest){
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }
            else if (arr[i] > secondLargest && arr[i] != firstLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}

```
### Reverse Arrar InPlace(means Without using extrea space)
### Check if an array is sorted in ascending order
### Find the sum and average of array elements
### Count occurrences of each element using a frequency array
