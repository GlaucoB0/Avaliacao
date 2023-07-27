//1º Declarar variaveis
let nota1, nota2, nota3, nota4


//2º dar valor as variaveis
/*************************Arquitetura***************************** */
alert("Arquitetura de Hardware e Software;")
nota1 = Number(prompt("Nota Atividades em sala: "))
nota2 = Number(prompt("Nota Atividades para casa: "))
nota3 = Number(prompt("Nota aprendizagem: "))
nota4 = Number(prompt("Nota Avaliação objetiva:"))

const Arquitetura = Number(((nota1 + nota2 + nota3 + nota4)/4).toFixed(2))
alert(`Média ${Arquitetura}`)
/*************************Arquitetura***************************** */



/*************************Metodologia e Desenvolvimento***************************** */
alert("Metodologias de Desenvolvimento de Projetos;")
nota1 = Number(prompt("Nota Atividades em sala: "))
nota2 = Number(prompt("Nota Atividades para casa: "))
nota3 = Number(prompt("Nota aprendizagem: "))
nota4 = Number(prompt("Nota Avaliação objetiva:"))

const Metodologia = Number(((nota1 + nota2 + nota3 + nota4)/4).toFixed(2))
alert(`Média ${Metodologia}`)
/*************************Metodologia e Desenvolvimento***************************** */



/*************************Logica Computacional***************************** */
alert("Logica Computacional;")
nota1 = Number(prompt("Nota Atividades em sala: "))
nota2 = Number(prompt("Nota Atividades para casa: "))
nota3 = Number(prompt("Nota aprendizagem: "))
nota4 = Number(prompt("Nota Avaliação objetiva:"))

const Logica = Number(((nota1 + nota2 + nota3 + nota4)/4).toFixed(2))
alert(`Média ${Logica}`)
/*************************Logica Computacional***************************** */



/*************************Fundamentos de banco de dados***************************** */
alert("Fundamentos de banco de dados;")
nota1 = Number(prompt("Nota Atividades em sala: "))
nota2 = Number(prompt("Nota Atividades para casa: "))
nota3 = Number(prompt("Nota aprendizagem: "))
nota4 = Number(prompt("Nota Avaliação objetiva:"))

const Fundamento = Number(((nota1 + nota2 + nota3 + nota4)/4).toFixed(2))
alert(`Média ${Fundamento}`)
/*************************Fundamentos de banco de dados***************************** */

/**Médias */
const MediaGeral = Number(((Arquitetura + Metodologia + Logica + Fundamento)/4).toFixed(2))

// Mostrar Resultado

alert(`Médias:\nArquitetura de Hardware e Software: ${Arquitetura}\nMetodologias de Desenvolvimento de Projetos: ${Metodologia}\nLógica Computacional: ${Logica}\nFundamentos de banco de dados: ${Fundamento}\n\nMedia Geral: ${MediaGeral}`)