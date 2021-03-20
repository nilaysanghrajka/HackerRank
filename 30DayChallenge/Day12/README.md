# HackerRank Challenge (Day 12: Inheritance)

## Objective
In this challenge, we're delving into inheritance.

## Task
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

- A Student class constructor, which has **4** parameters:
  1. A string, ***firstName***.
  2. A string, ***lastName***.
  3. An integer, ***idNumber***.
  4. An integer array (or vector) of test scores, **scores**.
- A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

## Input Format
The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

The first line contains ***firstName***, ***lastName*** and ***idNumber***, separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes **scores**.

## Output Format
Output is handled by the locked stub code. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

## Sample Input
```
Heraldo Memelli 8135627
2
100 80
```

## Sample Output
```
Name: Memelli, Heraldo
ID: 8135627
Grade: O
```

## Languages
These were completed in
- Python3
- Java
- C++
- JavaScript
