Implementação Factory Method
Código disponível em:
Criado arquivo com a classe abstrata e a interface no “Arquivo.ts”:
 
Bem como o “Export”, para que outros arquivos também acessem as informações aqui presentes.
Criado também as classes para cada tipo de arquivo.
 
E temos o mesmo padrão de código para cada arquivo, mas para exemplo utilizaremos o PDF.
 
Temos a importação da interface e da classe abstrata de Editar arquivo, que possui o método abstrato de criar o arquivo, que deve ser implementado aqui na subclasse, e temos o método gerenciar arquivo, que “chama” os método abrir e salvar, como vimos anteriormente, ou seja, neste caso, irá imprimir o "Abrindo arquivo PDF..." e "Salvando arquivo PDF...".
No index:
 
Temos as criações das novas instâncias, e após, o gerenciarArquivo, que fará abertura e fechamento dos arquivos, tendo o seguinte resultado:
 

