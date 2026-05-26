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
### Merge Soreted Array
```JS
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m-1;
        int k = m+n-1;
        int j = n-1;
        while(i>=0 && j>=0){
            if(nums2[j] > nums1[i]){
                nums1[k] = nums2[j];
                j--; 
            } else{
                nums1[k] = nums1[i];
              
                i--;
               
            }
            k--;
        }
        while(j >=0){
            nums1[k] = nums2[j];
            j--;
            k--; 
        }
    }
}
```
### Intersection of Two Arrays
```JS
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

        Set<Integer> set = new HashSet<>();
        Set<Integer> result = new HashSet<>();

        for(int i = 0; i < nums1.length; i++){
            set.add(nums1[i]);
        }

        for(int i = 0; i < nums2.length; i++){
            if(set.contains(nums2[i])){
                result.add(nums2[i]);
            }
        }

        int arr[] = new int[result.size()];

        int index = 0;

        for(int val : result){
            arr[index++] = val;
        }

        return arr;
    }
}
```
### Sort Color
```JS
class Solution {
    public void sortColors(int[] nums) {
        int i =0;
         int k=0; 
         int j = nums.length-1;
        //while condition k <=j why because sorting done after 1 sort

        while(k<=j){
        // check if current element = 1;
        if(nums[k] == 1){
            k++;
        } else if(nums[k] == 0){
            if(i == k){
                k++;
                continue;
            }
            int temp = nums[i];
            nums[i] = nums[k];
            nums[k]=  temp;
            i++;
        } else{
            int temp = nums[j];
            nums[j] = nums[k];
            nums[k]= temp;
            j--;
        }
        } 
    }
}
```
### Count the Number of Special Characters I
```JS
class Solution {
    public int numberOfSpecialChars(String word) {

        Set<Character> set = new HashSet<>();

        for (int i = 0; i < word.length(); i++) {
            set.add(word.charAt(i));
        }

        int count = 0;

        for (char ch = 'a'; ch <= 'z'; ch++) {

            if (set.contains(ch) &&
                set.contains(Character.toUpperCase(ch))) {

                count++;
            }
        }

        return count;
    }
}
```
