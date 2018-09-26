import java.util.Scanner;
class PrintN {
    public void printN (int Num) {
        for (int i = 0; i < (2 * Num) + 1; i++) {
            if (i < Num) {
                for (int j = 1; j < Num + 1; j++) {
                    System.out.println("*" * j);
                }
            } else {
                for (int k = Num - 1; k > 0; k--) {
                    System.out.println("*" * k);
                }
            }
        }
    }
}

public class Main {
    public static void Main (String[] args) {
        Scanner scan = new Scanner();
        int n = scan.nextInt();
        PrintN p = new PrintN();
        p.printN(n);
    }
}