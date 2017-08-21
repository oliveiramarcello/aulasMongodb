//Cria o objeto que vai receber o cliente mongo
var ClienteMongo = require('mongodb').MongoClient;
//define a url de conexao e informa o nome do banco 
var url = "mongodb://localhost/meuBanco";//caso o banco não exista o mongo irá criá-lo

//chama o metodo connect passando a url e a função callback
ClienteMongo.connect(url, function(erro,banco){
	//caso ocorra algum erro mostra
	if(erro) throw erro;
	//cria a coleção através do método createCollection
	banco.createCollection("minhaColecao", function(erro, resultado){
		//trata o erro
		if(erro) throw erro;
		//envia a mensagem de conexao criada
		console.log("Colecao criada com sucesso");
	});
	//encerra a conexao com o banco
	banco.close();
});