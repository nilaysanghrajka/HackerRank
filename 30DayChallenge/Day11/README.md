# HackerRank Challenge (Day 11: 2D Arrays)

## Objective
In this challenge, we're building on our knowledge of arrays by adding another dimension.

## Task
Calculate the hourglass sum for every hourglass in **A**, then print the maximum hourglass sum.

## Input Format
There are **6** lines of input, where each line contains **6** space-separated integers that describe the 2D Array **A**.

## Output Format
Print the maximum hourglass sum in **A**.

## Sample Input
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

## Sample Output
```
19
```

## Explanation
**A** contains the following hourglasses:

```
1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
```

The hourglass with the maximum sum (**19**) is:
```
2 4 4
  2
1 2 4
```

## Languages
These were completed in
- Python3
- Java
- C++
- JavaScript
