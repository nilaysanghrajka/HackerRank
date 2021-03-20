# HackerRank Challenge (Day 6: Let's Review)

## Objective
In this challenge, we will expand our knowledge of strings, combining it with what we have already learned about loops.

## Task
Given a string, **S** , of length **N** that is indexed from **0** to **N - 1**, print its even-indexed and odd-indexed characters as **2** space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.

## Input Format
The first line contains an integer, **T** (the number of test cases).
Each line **i** of the **T** subsequent lines contain a string, **S**.

## Output Format
For each String **S** (where **0 <= j <= T -1**), print **S**'s even-indexed characters, followed by a space, followed by **S**'s odd-indexed characters.

## Sample Input
```
2
Hacker
Rank
```

## Sample Output
```
Hce akr
Rn ak
```

## Explanation
Test Case 0: **S = "Hacker"**
**S[0] = "H"**
**S[1] = "a"**
**S[2] = "c"**
**S[3] = "k"**
**S[4] = "e"**
**S[5] = "r"**

The even indices are **0**, **2** and **4**, and the odd indices are **1**, **3** and **5**. We then print a single line of **2** space-separated strings; the first string contains the ordered characters from **S**'s even indices (**Hce**), and the second string contains the ordered characters from **S**'s odd indices (**akr**).

Test Case 1: **S = "Rank"**
**S[0] = "R"**
**S[1] = "a"**
**S[2] = "n"**
**S[3] = "k"**

The even indices are **0** and **2**, and the odd indices are **1** and **3**. We then print a single line of **2** space-separated strings; the first string contains the ordered characters from **S**'s even indices (**Rn**), and the second string contains the ordered characters from **S**'s odd indices (**ak**).

## Languages
These were completed in
- Python3
- Java
- C++
- JavaScript
