// Class:Blueprint for BankAccount object
public class BankAccount {

    // Attributes (data)
    private String name;
    private double balance;

    //Constructor (method to create objects)
    public BankAccount (String name, double initialDeposit){
        this.name = name;
        if (initialDeposit >= 0) {
            this.balance = initialDeposit;
        } else{
            System.out.println("Invalid inital deposit. Must be non-nagative");
            this.balance = 0.0;
        }
    }
    
    // Method (functions)
    public void deposit(double amount){
        if (amount > 0){
            this.balance += amount;
            System.out.println("Deposit successful. New Balance: $" + this.balance);
        } else{
            System.out.println("invalid deposit amount. Must be positive");
        }
    }

    public void withraw(double amount) {
        if (amount > 0 && amount <= this.balance){
            System.out.println("Withdrawal Successful. New balance: $" + this.balance);
        }else{
            System.out.println("Insufficient funds or invalid withdrawal");
        }
    }
    public String getBalance(){
        return "Account name:" + this.name + ", Balance: $" + this.balance;
    }
}