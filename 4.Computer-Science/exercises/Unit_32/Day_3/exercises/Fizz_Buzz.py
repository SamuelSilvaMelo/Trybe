def Fizz_Buzz(n):
    if n < 1:
        raise Exception('Informe um número maior que 1')

    response = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            response.append('FizzBuzz')
            break
        elif number % 3 == 0:
            response.append('Fizz')
        elif number % 5 == 0:
            response.append('Buzz')
        else:
            response.append(number)

    return response
