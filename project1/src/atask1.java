import java.util.Scanner;

public class atask1 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of rows for the pyramid: ");

        int rows;
        // Handle input errors gracefully
        try {
            rows = scanner.nextInt();
            if (rows <= 0) {
                System.out.println("Please enter a positive integer.");
                return;
            }
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter a positive integer.");
            return;
        }

        int maxLength = 2 * rows - 1;

        for (int i = 1; i <= rows; ++i) {

            for (int space = 1; space <= maxLength - 2 * i + 1; ++space) {
                System.out.print(" ");
            }


            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }


            for (int j = i - 1; j >= 1; j--) {
                System.out.print(j + " ");
            }

            System.out.println();
        }
    }
}
