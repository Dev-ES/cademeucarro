# [Cadê Meu Carro](http://cademeucarro.org/)

Projeto aberto da comunidade Dev-ES com a finalidade de criar um serviço de rastreio geográfico de carros roubados.

Esse é o repositório central para discussões de ideias e direcionamento do projeto, o código será segregado em:

* API
* Site
* App Mobile
* Raspberry Pi + Câmera + OpenCV

Ainda a decidir se usaremos repositórios isolados ou diretórios nesse mesmo respositório.

### Origem da ideia

Tudo começou através de uma conversa entre o @petronetto e @darciost sobre esse post [aqui](https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9) e posteriormente trazido a comunidade através do @petronetto. 

O objetivo é construirmos um protótipo funcional aonde podemos utilizar tecnologias abertas e construirmos uma comunidade em torno do projeto, tanto de desenvolvedores quando de consumidores.

### Objetivo inicial

`OBS: os objetivos aqui citados ainda podem sofrer alterações`

Nosso principal objetivo é ter um protótipo funcional da ideia:

- [ ] Site público para cadastro das informações do carro pelo dono, o mesmo pode a qualquer momento marcar o carro como roubado/perdido/achado. O objetivo aqui é agilizar a troca de status uma vez que sabemos que pode demorar muito até conseguir registrar o boletim de ocorrência e atualização dos sistemas públicos;
- [ ] API para integração com site, app mobile e possibilitar que outras pessoas possam utilizar os dados do sistema;
- [ ] App Mobile para consulta manual da placa e consulta automática via reconhecimento de placas; e
- [ ] Protótipo com Raspberry Pi + Câmera com o uso de OpenCV, a idéia aqui é ter um protótipo igual ao do link de origem da ideia.

Em ambos os serviços nosso objetivo é identificar a placa, consultar a api para saber o status do mesmo, se estiver marcado como roubado vamos gravar uma foto e a localização do GPS para reportar a ocorrência ao dono do carro. Futuramente, podemos considerar a parceria com os serviços de segurança local.

### Referências

 * [How I replicated an $86 million project in 57 lines of code](https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9)
 * [License Plate Recognition in React Native](https://medium.freecodecamp.org/license-plate-recognition-in-react-native-b4f790d3a160)
 * [Automatic License Plate Recognition library](https://github.com/openalpr/openalpr)
 * [ReactNative OpenALPR example](https://github.com/cardash/react-native-openalpr/tree/master/Example)

#### Hangouts

Podemos organizar alguns hangouts antes e depois do Hackathon, saiba mais no próximo tópico, para melhorar e evoluir o projeto. Vamos usar o [Slack](http://devescom.herokuapp.com/) da comunidade para agendar as datas e horários.

### Hackathon de bootstrap do projeto

Para darmos um quickstart no projeto nos dias 27 e 28 de Outubro de 2017, iremos realizar um hackathon na sede da PicPay com os envolvidos no projeto, o evento é free e aberto a todos os integrantes da comunidade. Mais informações [aqui](http://atualizarolink.com).

### Como posso contribuir

Você pode contribuir de várias maneiras, criando issues, testando as versões beta, comparecendo no hackathon, mandando um PR e por ai vai. Pode contribuir com a ~zueira~ discussões la no nosso [Slack](http://devescom.herokuapp.com/).

### Agradecimentos

Gostaria de deixar registrado aqui ao apoio de bate pronto da [PicPay](https://www.picpay.com/site/) e da [Conceptho](http://conceptho.com/) que apoiaram de bate pronto a idéia
