// Importações de bibliotecas padrão
use std::collections::HashMap;

// Definição de uma estrutura
#[derive(Debug)]
struct Person {
    name: String,
    age: u32,
}

// Implementação de métodos para a estrutura
impl Person {
    fn new(name: &str, age: u32) -> Self {
        Person {
            name: name.to_string(),
            age,
        }
    }

    fn greet(&self) -> String {
        format!("Hello, my name is {} and I am {} years old.", self.name, self.age)
    }
}

// Definição de um enum
enum Shape {
    Circle(f64), // Radius
    Rectangle(f64, f64), // Width, Height
}

// Implementação de métodos para o enum
impl Shape {
    fn area(&self) -> f64 {
        match self {
            Shape::Circle(radius) => std::f64::consts::PI * radius * radius,
            Shape::Rectangle(width, height) => width * height,
        }
    }
}

// Trait para uma funcionalidade genérica
trait Describable {
    fn describe(&self) -> String;
}

// Implementação do Trait para a estrutura Person
impl Describable for Person {
    fn describe(&self) -> String {
        format!("Person: {} ({} years old)", self.name, self.age)
    }
}

// Função genérica
fn print_description<T: Describable>(item: T) {
    println!("{}", item.describe());
}

// Função principal
fn main() {
    // Variáveis e constantes
    let name = "Alice";
    let age = 30;
    let person = Person::new(name, age);

    // Uso de estrutura e método
    println!("{}", person.greet());

    // Uso de enum e correspondência de padrões
    let circle = Shape::Circle(10.0);
    let rectangle = Shape::Rectangle(5.0, 10.0);

    println!("Circle area: {}", circle.area());
    println!("Rectangle area: {}", rectangle.area());

    // Uso de trait e função genérica
    print_description(person);

    // Manipulação de erros com Result
    let result = divide(10, 2);
    match result {
        Ok(value) => println!("Division result: {}", value),
        Err(e) => println!("Error: {}", e),
    }
}

// Função que retorna um Result
fn divide(a: u32, b: u32) -> Result<f64, &'static str> {
    if b == 0 {
        Err("Cannot divide by zero")
    } else {
        Ok(a as f64 / b as f64)
    }
}

// Testes
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_person_greet() {
        let person = Person::new("Bob", 25);
        assert_eq!(person.greet(), "Hello, my name is Bob and I am 25 years old.");
    }

    #[test]
    fn test_shape_area() {
        let circle = Shape::Circle(5.0);
        let rectangle = Shape::Rectangle(5.0, 10.0);

        assert!((circle.area() - 78.53981633974483).abs() < 1e-10);
        assert_eq!(rectangle.area(), 50.0);
    }

    #[test]
    fn test_divide() {
        assert_eq!(divide(10, 2), Ok(5.0));
        assert_eq!(divide(10, 0), Err("Cannot divide by zero"));
    }
}
