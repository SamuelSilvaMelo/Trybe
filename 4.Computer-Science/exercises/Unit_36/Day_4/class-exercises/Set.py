class Conjunto:
    def __init__(self):
        self._set = [False for _ in range(1001)]

    def add(self, item):
        if item > 1000:
            raise Exception("The maximum value allowed is 1000")

        self._set[item] = True


if __name__ == "__main__":
    conjunto = Conjunto()

    for number in [0, 10, 100, 1000]:
        conjunto.add(number)
