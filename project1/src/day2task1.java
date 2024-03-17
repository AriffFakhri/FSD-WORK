import java.util.Arrays;
public class day2task1 {
    public static void main(String[] args) {
//      no.1
        int[] arr = {1, 2, 3, 4, 5, 6};
        int target = 8;

        boolean found = false;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                found = true;
                break;
            }
        }

        if (found) {
            System.out.println("The integer " + target + " is present in the array.");
        } else {
            System.out.println("The integer " + target + " is not present in the array.");
        }



//        no.2
        int[] marks = {85, 92, 78, 90, 87};
        int sum = 0;

        System.out.println("Marks of all students in Physics:");
        for (int mark : marks) {
            System.out.print(mark + " ");
            sum += mark;
        }

        double average = (double) sum / marks.length;
        System.out.println("\nAverage marks in Physics: " + average);

    }
}



