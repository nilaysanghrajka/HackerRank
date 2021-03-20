# HackerRank Challenge (Day 8: Dictionaries and Maps)

## Objective
In today's challenge, we're learning about Key-Value pair mappings using a Map or Dictionary data structure.

## Task
Given **n** names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each **name** queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for **name** is not found, print Not found instead.

## Input Format
The first line contains an integer, **n**, denoting the number of entries in the phone book.
Each of the **n** subsequent lines describes an entry in the form of **2** space-separated values on a single line. The first value is a friend's name, and the second value is an **8**-digit phone number.

After the **n** lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a **name** to look up, and you must continue reading lines until there is no more input.

## Output Format
Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print  or  lines (depending on whether or not a valid **initialAge** was passed to the constructor).

## Sample Input
```
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
```

## Sample Output
```
sam=99912222
Not found
harry=12299933
```

## Explanation
We add the following **n = 3** (Key,Value) pairs to our map so it looks like this:
***phoneBook = {(sam, 99912222), (tom, 11122222), (harry, 12299933)}***

We then process each query and print key=value if the queried  is found in the map; otherwise, we print Not found.

Query 0: sam
Sam is one of the keys in our dictionary, so we print sam=99912222.

Query 1: edward
Edward is not one of the keys in our dictionary, so we print Not found.

Query 2: harry
Harry is one of the keys in our dictionary, so we print harry=12299933.

## Languages
These were completed in
- Python3
- Java
- C++
- JavaScript
