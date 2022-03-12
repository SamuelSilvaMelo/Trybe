from stack import Stack


def solve_expression(expr):
    stack = Stack(10)

    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            result = stack.pop() + stack.pop()
            stack.push(result)

        elif token == '-':
            secont_number = stack.pop()
            first_number = stack.pop()
            result = first_number - secont_number
            stack.push(result)

        elif token == '*':
            result = stack.pop() * stack.pop()
            stack.push(result)

        elif token == '/':
            secont_number = stack.pop()
            first_number = stack.pop()
            result = first_number / secont_number
            stack.push(result)

        else:
            stack.push(int(token))

    return stack.pop()


# A + B - C / A -> 5 10 + 30 5 / -
print(solve_expression('5 10 + 30 5 / -')) # 9

# B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
print(solve_expression('10 5 30 * 30 / 2 * +')) # 20

# A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
print(solve_expression('5 10 * 30 - 4 5 * 10 - +')) # 30

# (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
print(solve_expression('30 10 / 5 + 5 10 + *')) # 120

# 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
print(solve_expression('50 10 * 2 / 5 * 5 /')) # 250
