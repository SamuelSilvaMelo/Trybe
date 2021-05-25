// Para fixar

// Responda às perguntas a seguir, antes de nossa aula ao vivo, para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!

// 1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

// Um código assíncrono é executado em uma área especial, fora da fila dos códigos síncronos. Sendo assim ele só retorna para a fila dos códigos síncronso quando receber o resultado do código que estava executando. O código assíncrono também não trava a aplicação equanto é executado, efeito que acontece ao se rodar códigos síncronos.

// 2. Quando você tem que enfileirar várias callbacks, que problema surge?

// Demora na resposta, um código fica atrás do outro, como em uma fila, sendo assim o próximo código só será executado quando o anterior terminar. Também acaba dificultando o entendimento do código como um todo.

// 3. Por que as Promises são uma forma de se resolver esse problema?

// As Promises resolvem esses problemas (demora na resposta, um código só é executado após o outro) pois elas são executadas de maneira assíncrona, elas possuem um espaço especial de execução de modo que o fluxo normal de outras funções não fique paralizado.

// 4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

// É sempre recomendado fazer uma comunicação com uma API de maneira assíncrona.

// 5. Dada a resposta anterior, o que é fetch e para que ele serve?

// O fetch é um recurso que busca um recurso na rede. Funciona através da definição de objetos Request e Response (basicamente). Possui um argumento obrigatório (caminho para o recurso que se deseja obter - uma URL) e um argumento opcional que irá depender muito da API utilizada. O fetch retorna uma promessa.
