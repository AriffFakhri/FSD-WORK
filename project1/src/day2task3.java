//class EmploDetails{
//    int salary;
//    String name;
//}
//
//
//
//
//public class day2task3 {
//    public static void main(String[] args) {
//
//    }
//}

class EmploDetails {
    int salary;
    String name;

    // Getter for salary
    public int getSalary() {
        return salary;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Constructor
    public EmploDetails(int salary, String name) {
        this.salary = salary;
        this.name = name;
    }
}

public class day2task3 {
    public static void main(String[] args) {
        // Example usage
        EmploDetails empDetails = new EmploDetails(50000, "John");

        // Printing initial details
        System.out.println("Employee Name: " + empDetails.getName());
        System.out.println("Employee Salary: " + empDetails.getSalary());

        // Modifying name
        empDetails.setName("Jane");

        // Printing updated details
        System.out.println("Updated Employee Name: " + empDetails.getName());
    }
}
