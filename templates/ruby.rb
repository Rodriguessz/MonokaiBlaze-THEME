# Definição de uma classe
class Person
    # Atributos acessores para nome e idade
    attr_accessor :name, :age
  
    # Inicializador
    def initialize(name, age)
      @name = name
      @age = age
    end
  
    # Método de instância
    def greet
      "Hello, my name is #{@name} and I am #{@age} years old."
    end
  
    # Método de classe
    def self.create_anonymous
      new("Anonymous", 0)
    end
  end
  
  # Definição de um módulo
  module Describable
    def describe
      "Description: #{self.class} with name #{@name} and age #{@age}"
    end
  end
  
  # Herança - Classe Employee herda de Person
  class Employee < Person
    attr_accessor :job_title
  
    def initialize(name, age, job_title)
      super(name, age)
      @job_title = job_title
    end
  
    def greet
      super + " I work as a #{@job_title}."
    end
  end
  
  # Utilização de blocos
  def perform_action
    puts "Starting action..."
    yield if block_given?
    puts "Action completed."
  end
  
  # Função para divisão com tratamento de exceções
  def divide(a, b)
    raise ArgumentError, "Cannot divide by zero" if b == 0
    a / b.to_f
  end
  
  # Bloco de código principal
  def main
    # Instanciação e uso de classes
    person = Person.new("Alice", 30)
    puts person.greet
  
    employee = Employee.new("Bob", 40, "Developer")
    puts employee.greet
  
    # Usando o módulo
    extend Describable
    @name = "John"
    @age = 25
    puts describe
  
    # Usando blocos
    perform_action do
      puts "Performing custom action..."
    end
  
    # Manipulação de erros
    begin
      result = divide(10, 0)
      puts "Division result: #{result}"
    rescue ArgumentError => e
      puts "Error: #{e.message}"
    end
  end
  
  # Chama a função principal
  main
  
  # Testes com MiniTest
  require 'minitest/autorun'
  
  class PersonTest < Minitest::Test
    def test_person_greet
      person = Person.new("Charlie", 35)
      assert_equal "Hello, my name is Charlie and I am 35 years old.", person.greet
    end
  
    def test_divide
      assert_in_delta 5.0, divide(10, 2), 0.001
      assert_raises(ArgumentError) { divide(10, 0) }
    end
  end
  