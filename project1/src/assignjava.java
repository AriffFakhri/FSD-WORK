import java.util.InputMismatchException;
import java.util.Scanner;

public class assignjava {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Task 1: Number Pyramid Generation
        System.out.println("** Number Pyramid Generation **");
        int userInput = getPositiveIntegerInput(scanner, "Enter a positive integer: ");
        generateNumberPyramid(userInput);

        // Task 2: Email Validation System
        System.out.println("\n** Email Validation System **");
        String email = getEmailInput(scanner);
        boolean isValidEmail = validateEmail(email);
        System.out.println(isValidEmail ? "Valid Email" : "Invalid Email");

        // Task 3: Custom Calculator
        System.out.println("\n** Custom Calculator **");
        double num1 = getDoubleInput(scanner, "Enter first number: ");
        double num2 = getDoubleInput(scanner, "Enter second number: ");
        performOperations(num1, num2, scanner);

        scanner.close();
    }

    private static void generateNumberPyramid(int userInput) {
        for (int i = 1; i <= userInput; i++) {
            for (int j = 1; j <= userInput - i; j++) {
                System.out.print("  ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print(k + " ");
            }
            System.out.println();
        }
    }

    private static boolean validateEmail(String email) {
        int atSymbolIndex = email.indexOf('@');
        if (atSymbolIndex == -1 || atSymbolIndex == 0 || atSymbolIndex == email.length() - 1) {
            return false;
        }

        int dotIndex = email.indexOf('.', atSymbolIndex);
        if (dotIndex == -1 || dotIndex == atSymbolIndex + 1 || dotIndex == email.length() - 1) {
            return false;
        }

        String domain = email.substring(atSymbolIndex + 1);
        if (domain.length() < 3) {
            return false;
        }

        return true;
    }

    private static String getEmailInput(Scanner scanner) {
        System.out.print("Enter an email address: ");
        return scanner.nextLine();
    }

    private static void performOperations(double num1, double num2, Scanner scanner) {
        System.out.println("Choose operation:");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.println("5. Modulus");
        System.out.println("6. Custom Operation");
        System.out.println("7. Exit");

        int choice = getChoice(scanner);
        double result;
        switch (choice) {
            case 1:
                result = num1 + num2;
                System.out.println("Result: " + result);
                break;
            case 2:
                result = num1 - num2;
                System.out.println("Result: " + result);
                break;
            case 3:
                result = num1 * num2;
                System.out.println("Result: " + result);
                break;
            case 4:
                if (num2 == 0) {
                    System.out.println("Error: Division by zero");
                } else {
                    result = num1 / num2;
                    System.out.println("Result: " + result);
                }
                break;
            case 5:
                result = num1 % num2;
                System.out.println("Result: " + result);
                break;
            case 6:
                System.out.print("Enter custom operation (e.g., a*b or a+b): ");
                String operation = scanner.nextLine();
                // Parse the operation and perform it
                // For simplicity, let's assume the user enters a valid operation
                // You may want to add error handling here for invalid operations
                result = performCustomOperation(num1, num2, operation);
                System.out.println("Result: " + result);
                break;
            case 7:
                System.out.println("Exiting the calculator.");
                return;
            default:
                System.out.println("Invalid choice.");
        }
    }

    private static double performCustomOperation(double num1, double num2, String operation) {
        String[] parts = operation.split("[/*+-]");
        double result = 0;
        char operator = operation.charAt(parts[0].length());
        switch (operator) {
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero");
                } else {
                    result = num1 / num2;
                }
                break;
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            default:
                System.out.println("Invalid operator.");
        }
        return result;
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

    private static int getChoice(Scanner scanner) {
        int choice;
        while (true) {
            System.out.print("Enter your choice (1-7): ");
            try {
                choice = scanner.nextInt();
                if (choice >= 1 && choice <= 7) {
                    return choice;
                } else {
                    System.out.println("Invalid choice. Please enter a number between 1 and 7.");
                }
            } catch (InputMismatchException e) {
                scanner.nextLine(); // Clear the buffer after invalid input
                System.out.println("Invalid input. Please enter a number.");
            }
        }
    }
}
