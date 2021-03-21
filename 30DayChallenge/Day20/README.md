# HackerRank Challenge (Day 20: Sorting)

## Objective
In this challenge, we're discussing a simple algorithm called Bubble Sort.
Consider the following version of Bubble Sort:
```
for (int i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    int numberOfSwaps = 0;

    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            numberOfSwaps++;
        }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}
```

## Task
Given an array, **a**, of size **n** distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following **3** lines:

1.  Array is sorted in *numSwaps* swaps.
    where **numSwaps** is the number of swaps that took place.
2.  First Element: *firstElement*
    where **firstElement** is the first element in the sorted array.
3.  Last Element: *lastElement*
    where **lastElement** is the last element in the sorted array.

## Input Format
The first line contains an integer, **n**, the number of elements in array **a**.
The second line contains **n** space-separated integers that describe **a[0], a[1],...,a[n-1]**.

## Output Format
Print the following three lines of output:

1.  Array is sorted in *numSwaps* swaps.
    where **numSwaps** is the number of swaps that took place.
2.  First Element: *firstElement*
    where **firstElement** is the first element in the sorted array.
3.  Last Element: *lastElement*
    where **lastElement** is the last element in the sorted array.

## Sample Input 1
```
3
1 2 3
```

## Sample Output 1
```
Array is sorted in 0 swaps.
First Element: 1
Last Element: 3
```

## Sample Input 2
```
3
3 2 1
```

## Sample Output 2
```
Array is sorted in 3 swaps.
First Element: 1
Last Element: 3
```

## Explanation
Sample Case 1:
The array is already sorted, so **0** swaps take place and we print the necessary **3** lines of output shown above.

Sample Case 2:
The array **a = [3,2,1]** is not sorted, so we perform the following **3** swaps. Each line shows **a** after each single element is swapped.
1. **[3,2,1] -> [2,3,1]**
2. **[2,3,1] -> [2,1,3]**
3. **[2,1,3] -> [1,2,3]**
After **3** swaps, the array is sorted.

## Languages
These were completed in
- Python3
- Java
- C++
- JavaScript
