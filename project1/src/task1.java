import java.util.Scanner;
public class task1 {
    public static void main(String[] args) {
        System.out.println("Percentage of a marks out of 100");
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the student's name");
        String StudentName =  sc.next();

        int subject = 5;
        int maxmarks = 100;
        double totalmarks = 300;


        // Calculate percentage
        double sumofmarks = subject * maxmarks;
        double percentage = (totalmarks / sumofmarks) * 100;


        System.out.println("The percentage of " + StudentName + "'s marks out of 100 is: " + percentage + "%");
    }
}
