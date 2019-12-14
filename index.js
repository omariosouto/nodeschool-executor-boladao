// Começando pelo server

// Promise
// Callback
// Retorno de função
// Parametros
// Execução de função
// Variaveis
// Lógica de programação

const rotas = []

function get(rota, funcaoDaRota) {
    /*
     [
        '/': (req, res) => res.end('Hello World!')
    ]
    */
    rotas['GET'][rota] = funcaoDaRota;
}


get('/', (req, res) => res.end('Hello World!'))

function escutaRequests(request, response) {
    console.log('Recebemos um request')


    
    if(rotas[request.method][request.url]) {
        // rotas['/'] === (req, res) => res.end('Hello World!')
        rotas[request.method][request.url](request, response)
    }
    
    response.end('Pagina 404')
}





require('http').createServer(escutaRequests).listen(3000)

// Trabalhando em cima do HTTP
// Configurar uma porta pra rodar no localhost