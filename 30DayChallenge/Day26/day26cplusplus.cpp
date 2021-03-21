#include <iostream>
using namespace std;

int main(int argc, const char* args[]){
    int actualDay;
    int actualMonth;
    int actualYear;
    int expectedDay;
    int expectedMonth;
    int expectedYear;

    // Actual return date
    cin >> actualDay;
    cin >> actualMonth;
    cin >> actualYear;

    // Expected return date
    cin >> expectedDay;
    cin >> expectedMonth;
    cin >> expectedYear;

    int fine = 0;

    // Returned within the current year:
    if(expectedYear == actualYear){
        if(expectedMonth < actualMonth){
            // Returned 1+ months late in current year
            fine = (actualMonth - expectedMonth) * 500;
        }
        else if( (expectedMonth == actualMonth)
                && (expectedDay < actualDay) ){
            // Returned 1+ days late within the current month
            fine = (actualDay - expectedDay) * 15;
        }
        // Else it is implied that the book was returned early
    }
    else if(expectedYear < actualYear){
        // Returned 1+ years late
        fine = 10000;
    }
    // Else it is implied that the book was returned 1+ years early

    cout << fine << endl;
}
