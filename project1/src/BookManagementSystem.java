import java.util.Scanner;

class Book {
    String title;
    String author;
    int ISBN;

    public Book(String title, String author, int ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public int getISBN() {
        return ISBN;
    }
}

public class BookManagementSystem {
    static final int MAX_BOOKS = 10;
    Book[] books;
    int numOfBooks;

    public BookManagementSystem() {
        books = new Book[MAX_BOOKS];
        numOfBooks = 0;
    }

    public void addBook(Book book) {
        if (numOfBooks < MAX_BOOKS) {
            books[numOfBooks++] = book;
            System.out.println("Book added successfully.");
        } else {
            System.out.println("Cannot add more books. Maximum capacity reached.");
        }
    }

    public void listBooks() {
        if (numOfBooks == 0) {
            System.out.println("No books available.");
            return;
        }
        System.out.println("List of Books:");
        for (int i = 0; i < numOfBooks; i++) {
            System.out.println("Title: " + books[i].getTitle());
            System.out.println("Author: " + books[i].getAuthor());
            System.out.println("ISBN: " + books[i].getISBN());
            System.out.println();
        }
    }

    public void findBookByTitle(String title) {
        boolean found = false;
        for (int i = 0; i < numOfBooks; i++) {
            if (books[i].getTitle().equalsIgnoreCase(title)) {
                System.out.println("Book found:");
                System.out.println("Title: " + books[i].getTitle());
                System.out.println("Author: " + books[i].getAuthor());
                System.out.println("ISBN: " + books[i].getISBN());
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("No book with the title '" + title + "' found.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BookManagementSystem system = new BookManagementSystem();

        while (true) {
            System.out.println("\nChoose an option:");
            System.out.println("1. Add a book");
            System.out.println("2. List all books");
            System.out.println("3. Find a book by title");
            System.out.println("4. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1:
                    System.out.println("Enter title:");
                    String title = scanner.nextLine();
                    System.out.println("Enter author:");
                    String author = scanner.nextLine();
                    System.out.println("Enter ISBN:");
                    int ISBN = scanner.nextInt();
                    scanner.nextLine();
                    system.addBook(new Book(title, author, ISBN));
                    break;
                case 2:
                    system.listBooks();
                    break;
                case 3:
                    System.out.println("Enter title to search:");
                    String searchTitle = scanner.nextLine();
                    system.findBookByTitle(searchTitle);
                    break;
                case 4:
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please choose again.");
            }
        }
    }
}
