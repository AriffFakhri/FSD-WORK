import java.util.Scanner;
 class task2 {
    public static void main(String[] args) {

            // Create a Scanner object to get user input
            Scanner sc = new Scanner(System.in);

            // Prompt the user to enter the temperature
            System.out.print("Enter the current temperature in degrees Celsius: ");

            // Get the temperature as a double
            double temperature = sc.nextDouble();

            // Suggest activities based on temperature
            if (temperature < 10) {
                System.out.println("It's chilly outside. How about some hot chocolate?");
            } else if (temperature < 20) {
                System.out.println("Nice weather for a walk in the park.");
            } else if (temperature < 30) {
                System.out.println("Go for a swim or play some beach volleyball!");
            } else {
                System.out.println("It's a hot one! Stay hydrated and stay cool.");
            }

            // Close the scanner to avoid resource leaks
            sc.close();
    }
}

