import java.util.Scanner;

public class task1 {
    public static void main(String[] args) {
        // no 1 how to print
        System.out.println("Hello World");

        //no 2 data type
        int age = 65;
        String name = "Ariff";
        double weight = 71.7;

        System.out.println(" my name is " + name + " and I am " + age + " years old and I am weighed " + weight );

        //no 3
        // if else method
        if (age >= 18 && age < 60) {
            System.out.println("I am a young adult.");
        } else if (age >= 60) {
            System.out.println("I am an old citizen.");
        } else {
            System.out.println("I am a minor.");
        }
        

        // Use a for loop to iterate a certain number of times
        for (int i = 0; i < 9; i++) {
            System.out.println("Loop: " + (i + 1));
        }

       
         
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your favorite book: ");
        String favoriteBook = sc.nextLine();
        System.out.println("Your favorite book is: " + favoriteBook);
        
        // Closing the scanner object to avoid resource leak
        sc.close();

    }
}
