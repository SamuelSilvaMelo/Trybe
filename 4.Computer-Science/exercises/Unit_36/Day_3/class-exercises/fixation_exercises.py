class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
hash_map = HashMap()


for id_num, name in employees:
    employee = Employee(id_num, name)
    hash_map.insert(employee)


print(hash_map.get_value(23))

# Exercise 2

print(hash_map.get_value(30))

hash_map.update_value(30, "name30")

print(hash_map.get_value(30))
