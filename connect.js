//Cria o objeto que vai receber o cliente mongo
var ClienteMongo = require('mongodb').MongoClient;
//define a url de conexao e informa o nome do banco 
var url = "mongodb://localhost/meuBanco";//caso o banco não exista o mongo irá criá-lo

//chama o metodo connect passando a url e a função callback
ClienteMongo.connect(url, function(erro,banco){
	//caso ocorra algum erro mostra
	if(erro) throw erro;
	//envia a mensagem de que o banco foi criado com sucesso
	console.log("banco criado...");
	//encerra a conexao com o banco
	banco.close();
});