const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build'); // Escreve o path onde está o diretório, nomeadamente na pasta 'build'
fs.removeSync(buildPath); // Remove o caminho buildPath

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // Certifica-se de que existe. caso contrário cria este diretório

console.log(output)
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    ); // Para cada key do output corre o fs.outputJsonSync que cria um ficheiro .json se este ainda não existir, com o nome da key e com o conteúdo output[key]
}