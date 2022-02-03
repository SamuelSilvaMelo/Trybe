# Exercício 4: Implemente um sistemas de logs por nível de severidade, seguindo o diagrama abaixo.
#
# Classe Log
#
# Atributos:
# manipuladores - Será inicializado com um conjunto de subclasses de ManipuladorDeLog;
#
# Métodos:
# adicionar_manipulador - adiciona um manipulador ao conjunto de manipuladores do gerenciamento de logs ( Log );
# info - dispara logs com nível de severidade "INFO" ;
# alerta - dispara logs com nível de severidade "ALERTA" ;
# erro - dispara logs com nível de severidade "ERRO" ;
# debug - dispara logs com nível de severidade "DEBUG" ;
# __log - dispara os logs formatados para todos os manipuladores (invocado para cada nível de severidade, para evitar duplicação de código);
# __formatar - formata os logs de acordo com o padrão "[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero";
# A interface de manipulação de logs deve utilizar métodos de classe.
#
# Dica: Você pode utilizar a função print em tela ou em arquivo (que pode ter um nome padrão).
