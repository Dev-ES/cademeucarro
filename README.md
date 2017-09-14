# cademeucarro
Projeto open da comunidade para criar um serviço de localização/rastreio de carros roubados.

Esse é o repositório central para discussões de idéias e direcionamento do projeto, o código fica nos sub-repositórios
* Api
* Site
* App Mobile
* Pi + OpenCV

### Origem da idéia
Tudo começou ao lermos esse post [aqui](https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9).
O objetivo é construirmos um protótipo funcional aonde podemos utilizar tecnologias oss e contruirmos uma comunidade em torno do projeto, tanto de desenvolvedores quando de consumidores.

### Objetivo Inicial
Nosso principal objetivo é ter um protótipo funcional da idéia:
- [ ] Site público para cadastro das informações do carro pelo dono, o mesmo pode a qualquer momento marcar o carro como roubado/perdido/achado. O objetivo aqui é agilizar a troca de status uma vez que sabemos que pode demorar muito até conseguir registrar o boletim de ocorrência e atualização dos sistemas públicos.
- [ ] API para integração com site, app mobile e possibilitar outras pessoas poderem utilizar os dados do sistema.
- [ ] App Mobile para consulta manual da placa e consulta automática via reconhecimento de placas
- [ ] Protótipo com Pi + Câmera para uso de OpenCV, a idéia aqui é ter um protótipo igual ao do link de origem da idéia.

Em ambos os serviços nosso objetivo é identificar a placa, consultar a api para saber o status do mesmo, se estiver marcado como roubado vamos gravar uma foto e a localização do GPS para enviar para o dono do carro. (quem sabe direto pra polícia + pra frente).

### Quickstart - Hackathon
Para darmos um quickstart no projeto nos dias 27 e 28 de Outubro de 2017, iremos realizar um hackathon na sede da PicPay com os envolvidos no projeto, o evento é free e aberto a todos os integrantes da comunidade. Mais informações [aqui](http://atualizarolink.com).

### Como posso contribuir
Voce pode contribuir de várias maneiras, criando issues, testando as versões beta, comparecendo no hackathon, mandando um PR e por ai vai. Pode contribuir com a ~zueira~ discussões la no nosso [slack](http://devescom.herokuapp.com/).

### Agradecimentos
Gostaria de deixar registrado aqui ao apoio de bate pronto da [PicPay](https://www.picpay.com/site/) e da [Conceptho](http://conceptho.com/) que apoiaram de bate pronto a idéia
