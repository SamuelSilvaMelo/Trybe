class MainMemory:
    def __init__(self):
        self.clean()
        self.load_memory = []

    def load(self, value):
        self.load_memory.append(value)

    def get(self, index):
        try:
            return self.loaded_memory[index]
        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []
