
function CalculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome:'Maria',
    idade: 19
}
const pessoa2 = {
    nome:'Joao',
    idade: 19
}
const animal = {
    nome:'susi',
    idade: 14
}

console.log(CalculaIdade.call(pessoa2, 5));