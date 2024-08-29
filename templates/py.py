# Comentário de uma linha

"""
Comentário de múltiplas linhas
que pode se estender por várias linhas.
"""

# Importação de módulos
import os
import sys
from datetime import datetime
import math as m

# Variáveis
variavel_inteira = 10
variavel_float = 3.14
variavel_string = "Texto de exemplo"
variavel_booleana = True

# Listas, Dicionários e Conjuntos
lista = [1, 2, 3, 4, 5]
dicionario = {"chave1": "valor1", "chave2": "valor2"}
conjunto = {1, 2, 3, 4, 5}

# Funções
def minha_funcao(param1, param2):
    """Função de exemplo que soma dois valores."""
    return param1 + param2

# Função Lambda
soma = lambda x, y: x + y

# Classes e Herança
class MinhaClasseBase:
    def __init__(self, nome):
        self.nome = nome

    def metodo_exemplo(self):
        print(f"Olá, {self.nome}")

class MinhaClasseDerivada(MinhaClasseBase):
    def __init__(self, nome, idade):
        super().__init__(nome)
        self.idade = idade

    def metodo_herdado(self):
        super().metodo_exemplo()
        print(f"Você tem {self.idade} anos.")

# Instância de classe
instancia = MinhaClasseDerivada("Exemplo", 30)
instancia.metodo_herdado()

# Estruturas de Controle
if variavel_booleana:
    print("Verdadeiro")
elif variavel_inteira > 5:
    print("Maior que 5")
else:
    print("Falso")

# Loops
for i in range(10):
    print(i)

while variavel_inteira < 15:
    variavel_inteira += 1

# Compreensão de Listas
quadrados = [x ** 2 for x in lista]

# Tratamento de Exceções
try:
    resultado = 10 / 0
except ZeroDivisionError as e:
    print(f"Erro: {e}")
finally:
    print("Bloco finally sempre é executado.")

# Manipulação de Arquivos
with open('arquivo.txt', 'w') as arquivo:
    arquivo.write("Escrevendo no arquivo.")

# Decoradores
def meu_decorador(func):
    def wrapper():
        print("Algo antes da função.")
        func()
        print("Algo depois da função.")
    return wrapper

@meu_decorador
def funcao_decorada():
    print("Função decorada.")

funcao_decorada()

# Funções de Alta Ordem
def aplicar_funcao(func, valor):
    return func(valor)

resultado = aplicar_funcao(lambda x: x * 2, 5)

# Módulos e Namespaces
def modulo_externo():
    return os.path.basename(sys.argv[0])

# Expressões Regulares
import re

padrao = r"\d{3}-\d{2}-\d{4}"
texto = "Meu número é 123-45-6789"
resultado = re.search(padrao, texto)

# Geradores
def meu_gerador():
    yield 1
    yield 2
    yield 3

for valor in meu_gerador():
    print(valor)

# Funções Assíncronas
import asyncio

async def funcao_assincrona():
    print("Iniciando...")
    await asyncio.sleep(1)
    print("Finalizando...")

asyncio.run(funcao_assincrona())

# Classes Abstratas
from abc import ABC, abstractmethod

class MinhaClasseAbstrata(ABC):
    @abstractmethod
    def meu_metodo_abstrato(self):
        pass

# Type Hinting
def minha_funcao_com_tipos(x: int, y: int) -> int:
    return x + y

# Docstrings
def minha_funcao_com_docstring(x, y):
    """
    Soma dois números.

    :param x: Primeiro número
    :param y: Segundo número
    :return: A soma de x e y
    """
    return x + y
