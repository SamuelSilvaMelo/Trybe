# Exercício 7: Agora iremos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver . Nosso servidor UDP deverá:
#
# 1. Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
# 2. Responder com os dados recebidos (como um eco).
# 3. Utilize a porta 8084.
#
# Dicas:
#
# todas as dicas do exercício 4 se aplicam
# telnet não funciona com udp -- use netcat (ou nc)

# SOLUÇÃO GABARITO

from socketserver import DatagramRequestHandler, UDPServer


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with UDPServer(("localhost", 8084), EchoHandler) as server:
        server.serve_forever()
