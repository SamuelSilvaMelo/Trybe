import sys


if __name__ == "__main__":
    for argument in sys.argv:
        if argument != 'arquivo.py':
            print("Received -> ", argument)
