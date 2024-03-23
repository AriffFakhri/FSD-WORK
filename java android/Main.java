// Main class with your entry point
public class Main {
    public static void main(String[] args) {
        
        // Create a BankAccount object
        BankAccount myAccount = new BankAccount("Ariff", 1000);

        System.out.println("Initial Account details:");
        // Calling the getBalance method from the object
        System.out.println(myAccount.getBalance());

        // Deposit and Withdraw using
        myAccount.deposit(50.00);
        System.out.println("Account details after deposit: ");
        System.out.println(myAccount.getBalance());
        myAccount.withraw(20.00);

        myAccount.deposit(20.00);
        System.out.println("Account details after withdrawal: ");
        System.out.println(myAccount.getBalance());
        
        
        // String manipulation
        String bankName = "Your friendly bank";
        //Extract a substring
        System.out.println(bankName.substring(0,11));

        //Array (collection of values)
        double [] transactions = {10.00, -25.00, 7.50};
        System.out.println("Second transaction amount: $" + transactions[1]);
        
    }
}
