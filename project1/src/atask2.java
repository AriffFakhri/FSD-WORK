
import java.util.Scanner;

public class atask2 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter a valid email address: ");
        String email = sc.nextLine();

        if (isValidEmail(email)) {
            System.out.println("Valid email address.");
        } else {
            System.out.println("Invalid email address.");
        }
    }

    public static boolean isValidEmail(String email) {
        // Checking if the email contains exactly one '@' symbol
        int atIndex = email.indexOf('@');
        if (atIndex == -1 || email.indexOf('@', atIndex + 1) != -1) {
            return false;
        }

        // Checking if there is at least one '.' after the '@' symbol
        int dotIndex = email.indexOf('.', atIndex);
        if (dotIndex == -1 || dotIndex == atIndex + 1 || dotIndex == email.length() - 1) {
            return false;
        }

        // Checking if the domain part is at least 3 characters long
        String domain = email.substring(atIndex + 1);
        if (domain.length() < 3) {
            return false;
        }

        return true;

    }
}
