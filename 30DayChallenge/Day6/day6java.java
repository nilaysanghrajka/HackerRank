import java.io.*;
import java.util.*;

public class day6java {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int cases = scan.nextInt();
        for(int c=0;c<cases;c++) {
            String even, odd;
            even = odd = "";
            String myString = scan.next();
            char[] charArray = myString.toCharArray();
            for (int i = 0; i < charArray.length; i += 2) {
                even += charArray[i];
            }
            for (int j = 1; j < charArray.length; j += 2) {
                odd += charArray[j];
            }
            System.out.println(even + " " + odd);
        }
    }
}
