#include <iostream>
#include <vector>
#include <string>

class MonokaiBlazeExample {
private:
    // Variables
    static const std::string THEME_NAME;
    int count;

public:
    // Constructor
    MonokaiBlazeExample() : count(0) {}

    // Method to display a message
    void showMessage(const std::string& message) const {
        std::cout << message << std::endl;
    }

    // Main method
    static void run() {
        // Print theme name
        std::cout << "Theme: " << THEME_NAME << std::endl;

        // Create an instance of the class
        MonokaiBlazeExample example;

        // Call a method
        example.showMessage("Welcome to Monokai Blaze!");

        // Conditional statement
        if (example.count > 0) {
            std::cout << "Count is positive." << std::endl;
        } else {
            std::cout << "Count is zero or negative." << std::endl;
        }

        // Loop example
        for (int i = 0; i < 5; ++i) {
            std::cout << "Loop iteration: " << i << std::endl;
        }

        // Array (vector) example
        std::vector<std::string> colors = {"#F92672", "#A6E22E", "#66D9EF", "#FD971F"};
        for (const std::string& color : colors) {
            std::cout << "Color: " << color << std::endl;
        }

        // Nested class example
        class NestedClass {
        private:
            std::string nestedMessage;

        public:
            NestedClass() : nestedMessage("This is a nested class.") {}

            void displayMessage() const {
                std::cout << nestedMessage << std::endl;
            }
        };

        NestedClass nested;
        nested.displayMessage();
    }
};

// Define the static constant
const std::string MonokaiBlazeExample::THEME_NAME = "Monokai Blaze";

int main() {
    MonokaiBlazeExample::run();
    return 0;
}
