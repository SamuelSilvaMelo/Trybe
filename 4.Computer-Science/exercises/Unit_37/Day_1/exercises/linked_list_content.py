from node import Node


class LinkedList:

    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def __get_node_at(self, position):
        current_value = self.head_value

        while position > 0:
            current_value = current_value.next
            position -= 1

        return current_value

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_value = Node(value)
        current_value = self.__get_node_at(self.__length - 1)
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)

        if position >= len(self):
            return self.insert_last(value)

        current_value = self.__get_node_at(position)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value

        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1

        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(self.__length - 2)
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(self.__length - 2)
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = self.__get_node_at(position)

        if value_returned.next:
            value_returned.next = None

        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        if self.head_value:
            self.head_value = None
            self.__length = 0

    def index_of(self, value):
        current_value = self.head_value
        current_index = 0

        if not self.head_value:
            return None

        while current_index < self.__length:
            if current_value.value != value:
                current_index += 1
            else:
                return current_index

            current_value = current_value.next

        return -1
