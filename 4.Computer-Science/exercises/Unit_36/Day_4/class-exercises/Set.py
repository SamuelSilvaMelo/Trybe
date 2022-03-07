class Conjunto:
    def __init__(self):
        self._set = [False for _ in range(1001)]

    def add(self, item):
        if item > 1000:
            raise Exception("The maximum value allowed is 1000")

        self._set[item] = True

    def __str__(self):
        result = "{"

        for index, value in enumerate(self._set):
            if value is not False:
                if result == "{":
                    result += f"{index}"
                else:
                    result += ", " + f"{index}"

        return result + "}"

    def __contains__(self, item):
        return (self._set[item] is True)

    # Feito com auxílio do gabarito
    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self._set[index] or conjuntoB._set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    conjunto = Conjunto()

    for number in [0, 10, 100, 1000]:
        conjunto.add(number)

    print(conjunto)
    print(10 in conjunto)
    print(50 in conjunto)

    conjunto_1 = Conjunto()
    for index in range(1, 11):
        conjunto_1.add(index)

    conjunto_2 = Conjunto()
    for index in range(10, 21):
        conjunto_2.add(index)

    conjunto_3 = conjunto_1.union(conjunto_2)
    print(conjunto_3)
