# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:


def exercise_one():
    user_name = input("Qual o seu nome? ")

    for letter in user_name:
        print(letter)


# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.
# DICA:
# Receba os valores em um mesmo input , solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit , embutido no tipo str , pode ser utilizado para verificar se a string corresponde a um número natural.


def exercise_two():
    print("Vamos somar alguns números!")
    numbers = input(
      "Insira uma lista de números separados por espaço: "
    ).split(' ')

    sum = 0

    for number in numbers:
        try:
            sum += int(number)
        except ValueError:
            print(f'Erro ao somar valores, {number} é um valor inválido')

    print(f'A soma total corresponde à: {sum}')


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre mantendo somente as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.
# File:
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5


def exercise_three():
    failed_students_list = []

    with open('students.txt', 'r') as students:
        for student in students:
            student_name = student.split(' ')[0]
            student_grade = int(student.split(' ')[1])

            if student_grade < 6:
                failed_students_list.append(f'{student_name}\n')

    with open('failed_students.txt', 'w') as failed_students:
        failed_students.writelines(failed_students_list)
