from abc import ABC, abstractmethod
import gzip
import json
import csv
from zipfile import ZipFile


class Compressor(ABC):
    def __init__(self, filepath='./'):
        self.filepath = filepath

    @abstractmethod
    def compress(self, file_name):
        raise NotImplementedError


class ZipCompressor(Compressor):
    def compress(self, file_name):
        with ZipFile(file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor(Compressor):
    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    def __init__(self, export_file, compressor):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    # Aqui temos um atributo de classe!
    FILE_EXTENSION = ''

    def get_export_file_name(self):
        # Aqui usamos o atributo de classe
        # Vai fazer mais sentido nas classes herdeiras!
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_len(self):
        return len(self.build())


class SalesReportJSON(SalesReport):
    # Nós não reimplementamos o get_export_file_name
    # mas como ele usa um atributo de classe pra pegar a extensão
    # só de redefinir o atributo já vamos conseguir mudar o resultado!
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_len(self):
        return super().get_len()


class SalesReportCSV(SalesReport):
    FILE_EXTENSION = '.csv'

    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            headers = ['Coluna 1', 'Coluna 2', 'Coluna 3']
            writer = csv.DictWriter(file, fieldnames=headers)
            writer.writeheader()
            writer.writerows(self.build())

    def get_len(self):
        return super().get_len()


# Para testar
# relatorio_de_compras_json = SalesReportJSON('meu_relatorio_1_json', ZipCompressor())
# relatorio_de_vendas_json = SalesReportJSON('meu_relatorio_2_json', ZipCompressor())

# relatorio_de_compras_json.compress()
# relatorio_de_vendas_json.compress()

# relatorio_de_compras_csv = SalesReportCSV('meu_relatorio_1_csv', GzCompressor())
# relatorio_de_vendas_csv = SalesReportCSV('meu_relatorio_2_csv', GzCompressor())

# relatorio_de_compras_csv.compress()
# relatorio_de_vendas_csv.compress()
