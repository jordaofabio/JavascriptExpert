'use strict'

const { watch, promises: { readFile} } = require('fs');

class File {
    watch(event, filename) {
         console.log('this', this)
         // usar arguments diretamento no javascript é uma má prática pq vc perde o controle do que está sendo passado
         console.log('arguments', arguments)
         console.log('arguments como array', Array.prototype.slice.call(arguments))
         this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }
}

// watch(__filename, async (event, filename) => {
//     console.log((await readFile(filename)).toString());
// });
 
const file =  new File();
// Dessa forma ele ignora o this da class File e herda o this da função watch
//watch(__filename, file.watch)


// alternativa para não herdar o this da função 
// watch(__filename, (event, filename) => file.watch(event, filename))

// podemos deixar explícito qual é o contexto que a função deve seguir
// o bind retorna uma função com o 'this' que definido, neste caso o do 'file', ignorando o da função watch
// watch(__filename, file.watch.bind(file))

// a diferença entre call e apply é que um vc lista os argumento e no outro vc passa os argumentos como arry
file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename);
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename]);
