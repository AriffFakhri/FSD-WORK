import java.util.Scanner;

public class day2task2 {
    public static void multiplication(int n) {
        System.out.println("Multiplication Table of " + n + ":");
        for (int i = 1; i <= 5; i++) {
            System.out.println(n + " * " + i + " = " + (n * i));
        }
    }

    public static int sumOfFirstNatural(int n) {
        if (n == 1) {
            return 1;
        } else {
            return n + sumOfFirstNatural(n - 1);
        }
    }

    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);

        System.out.print("Enter a number to generate its multiplication table: ");
        int number1 = sc.nextInt();

        multiplication(number1);

        System.out.print("Enter number to calculate the sum of first natural numbers: ");
        int number2 = sc.nextInt();

        int sum = sumOfFirstNatural(number2);
        System.out.println("\nSum of first " + number2 + " natural numbers: " + sum);

        sc.close();
    }
}
