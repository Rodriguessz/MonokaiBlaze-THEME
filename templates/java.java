public class MonokaiBlazeExample {

    // Variables
    private static final String THEME_NAME = "Monokai Blaze";
    private int count = 0;

    // Main method
    public static void main(String[] args) {
        // Print theme name
        System.out.println("Theme: " + THEME_NAME);

        // Create an instance of the class
        MonokaiBlazeExample example = new MonokaiBlazeExample();

        // Call a method
        example.showMessage("Welcome to Monokai Blaze!");
        
        // Conditional statement
        if (example.count > 0) {
            System.out.println("Count is positive.");
        } else {
            System.out.println("Count is zero or negative.");
        }

        // Loop example
        for (int i = 0; i < 5; i++) {
            System.out.println("Loop iteration: " + i);
        }

        // Array example
        String[] colors = {"#F92672", "#A6E22E", "#66D9EF", "#FD971F"};
        for (String color : colors) {
            System.out.println("Color: " + color);
        }
    }

    // Method to show message
    public void showMessage(String message) {
        System.out.println(message);
    }

    // Nested class example
    private class NestedClass {
        private String nestedMessage = "This is a nested class.";

        public void displayMessage() {
            System.out.println(nestedMessage);
        }
    }
}
