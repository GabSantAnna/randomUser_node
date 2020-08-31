const fetch = require('node-fetch');

const fs = require('fs');

//criar um diretorio - ok 
fs.mkdir('dados', () => {
//criar arquivo csv - ok
fs.writeFile('./dados/users.csv', ('primeiro_nome,sobrenome,email,idade,genero,username,password'), 'utf8', (err) => {
    if(err) throw err;
})})


async function randomUser() {
     // conseguir dados da API - ok
     const req = await fetch('https://randomuser.me/api/') 
     if (req.ok) {
         const data = await req.json();
         console.log(data.results)
     }
}

randomUser()