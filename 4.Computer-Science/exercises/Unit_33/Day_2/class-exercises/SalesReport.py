import json
import csv


class SalesReport():
    def __init__(self, export_file, extension):
        self.extension = extension
        self.export_file = export_file + extension

    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
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

    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file, 'w') as file:
            if self.extension == '.json':
                json.dump(self.build(), file)
            if self.extension == '.csv':
                headers = ['Coluna 1', 'Coluna 2', 'Coluna 3']
                writer = csv.DictWriter(file, fieldnames=headers)
                writer.writeheader()
                writer.writerows(self.build())


# Classe, crie (em outras palavras, instancie!) uma nova entidade 'Relatório de vendas' para eu usar!

meu_relatorio_de_vendas = SalesReport('meu_relatorio', '.csv')

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas.serialize()
