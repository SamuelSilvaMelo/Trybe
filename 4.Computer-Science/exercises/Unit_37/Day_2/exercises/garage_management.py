from stack import Stack


class Garage:
    def __init__(self, spaces):
        self._garage = Stack(spaces)
        self._street = Stack(spaces)

    def list_parked_vehicles(self):
        if self._garage.is_empty():
            return "The garage is empty"

        return self._garage

    def add_car(self, plate):
        self._garage.push(plate)

    def remove_car(self, plate):
        message = f"The car with plate: {plate} is not in the garage"

        # Remove os carros da garagem e coloca na rua enquanto a placa não é a buscada e a garagem não está vazia
        while self._garage.peek() != plate and not self._garage.is_empty():
            removed_car = self._garage.pop()
            self._street.push(removed_car)

        # Já removidos todos os carros com a placa diferente da buscada se a última placa for igual a buscada o carro é retirado e a mensgem padrão é alterada
        if self._garage.peek() == plate:
            removed_car = self._garage.pop()
            message = f"The car with plate: {removed_car} has been removed."

        # Retorna todos os carros da rua para a garagem
        while not self._street.is_empty():
            current_car = self._street.pop()
            self._garage.push(current_car)

        return message
