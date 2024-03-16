import java.util.InputMismatchException;
import java.util.Scanner;

public class javaassign {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            // Task 1: Number Pyramid Generation
            System.out.println("\n** Number Pyramid Generation **");
            int maxNumber = getPositiveIntegerInput(scanner, "Enter a positive integer as the maximum number: ");
            int rows = (maxNumber * 2) - 1;

            for (int i = 1; i <= rows; i++) {
                int spaces = rows - i;
                for (int j = 1; j <= spaces; j++) {
                    System.out.print(" ");
                }

                int numberToPrint = (i <= rows / 2) ? i : rows - i + 1;
                for (int j = 1; j <= numberToPrint; j++) {
                    System.out.print(numberToPrint + " ");
                }
                System.out.println();
            }

            // Task 2: Email Validation System
            System.out.println("\n** Email Validation System **");
            System.out.print("Enter an email address: ");
            String email = scanner.nextLine();

            boolean validEmail = validateEmail(email);
            System.out.println(validEmail ? "Valid Email" : "Invalid Email");

            // Task 3: Custom Calculator
            System.out.println("\n** Custom Calculator **");
            System.out.println("\nAvailable operations:");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Divide");
            System.out.println("5. Modulus");
            System.out.println("6. Define Custom Operation");
            System.out.println("7. Exit");

            System.out.print("Enter your choice: ");
            int choice;
            try {
                choice = scanner.nextInt();
            } catch (InputMismatchException e) {
                scanner.nextLine(); // Clear the buffer after invalid input
                System.out.println("Invalid input. Please enter a number.");
                continue;
            }

            if (choice == 7) {
                break;
            }

            double num1, num2;
            String customOperation = null;

            switch (choice) {
                case 1:
                    num1 = getDoubleInput(scanner, "Enter first number: ");
                    num2 = getDoubleInput(scanner, "Enter second number: ");
                    System.out.println(num1 + " + " + num2 + " = " + add(num1, num2));
                    break;
                case 2:
                    num1 = getDoubleInput(scanner, "Enter first number: ");
                    num2 = getDoubleInput(scanner, "Enter second number: ");
                    System.out.println(num1 + " - " + num2 + " = " + subtract(num1, num2));
                    break;
                // ... Implement other operations (multiply, divide, modulus)
                case 6:
                    scanner.nextLine(); // Clear buffer
                    System.out.print("Enter a custom operation (e.g., a*b or a+b): ");
                    customOperation = scanner.nextLine();
                    break;
                default:
                    System.out.println("Invalid choice.");
            }

            // Perform custom operation if defined
            if (customOperation != null) {
                performCustomOperation(scanner, customOperation);
            }
        }

        scanner.close();
    }

    private static int getPositiveIntegerInput(Scanner scanner, String prompt) {
        int num;
        while (true) {
            System.out.print(prompt);
            try {
                num = scanner.nextInt();
                if (num > 0) {
                    return num;
                } else {
                    System.out.println("Invalid input. Please enter a positive integer.");
                }
            } catch (InputMismatchException e) {
                scanner.nextLine(); // Clear the buffer after invalid input
                System.out.println("Invalid input. Please enter a number.");
            }
        }
    }

    private static double getDoubleInput(Scanner scanner, String prompt) {
        double num;
        while (true) {
            System.out.print(prompt);
            try {
                num = scanner.nextDouble();
                return num;
            } catch (InputMismatchException e) {
                scanner.nextLine(); // Clear the buffer after invalid input
                System.out.println("Invalid input. Please enter a number.");
            }
        }
    }

    private static boolean validateEmail(String email) {
        // Implement email validation logic here
        // Return true if the email is valid, false otherwise
        return false; // Placeholder return value
    }

    private static double add(double num1, double num2) {
        return num1 + num2;
    }

    private static double subtract(double num1, double num2) {
        return num1 - num2;
    }

    // Implement other arithmetic operations (multiply, divide, modulus)

    private static void performCustomOperation(Scanner scanner, String customOperation) {
        // Implement custom operation logic here
    }
}
