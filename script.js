let livros = ['Javascript', 'ECMAScript', 'MongoDB'];
//console.log(livros[2],livros[1]);

//let consulta = livros.indexOf('MongoDB')
//console.log(consulta)
console.log(livros.pop());
console.log(livros)

console.log(livros.push("novolivro"))
console.log(livros)

let inserir = prompt('Digite o livro para inserir:')

console.log(livros.push(inserir))
console.log(livros)