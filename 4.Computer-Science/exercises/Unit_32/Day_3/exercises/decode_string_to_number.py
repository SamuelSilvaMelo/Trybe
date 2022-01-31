def decode_string_to_number(string):
    if not 1 <= len(string) <= 30:
        raise ValueError(
          'The number entered must be greater than 1 and less than 30'
        )

    number = ''
    for letter in string:
        if letter.upper() in 'ABC':
            number += '2'
        elif letter.upper() in 'DEF':
            number += '3'
        elif letter.upper() in 'GHI':
            number += '4'
        elif letter.upper() in 'JKL':
            number += '5'
        elif letter.upper() in 'MNO':
            number += '6'
        elif letter.upper() in 'PQRS':
            number += '7'
        elif letter.upper() in 'TUV':
            number += '8'
        elif letter.upper() in 'WXYZ':
            number += '9'
        elif letter.upper() in '01-':
            number += letter
        else:
            raise ValueError('Invalid value')

    return number
