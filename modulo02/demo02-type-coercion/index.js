9999999999999999 // 16
// 10000000000000000
true + 2
// 3
'21' + true 
// '21true'
'21' - true
// 20
// '22'--1
// 22
0.1 + 0.2 === 0.3
// false

3 > 2 > 1
// false
3 > 2 >= 1
// true
'B' + 'a' + + 'a' + 'a'
// BaNaNa

'1' == 1
'1' === 1

console.assert(String(123) === '123', "explicit convertion to string");
console.assert(123 + '' === '123', "implicit convertion to string");
console.assert(('hello' || 123) === 'hello', "|| return the first element if both are true");
const teste = 'hello' || 123;
// console.log('teste', teste)
console.assert(('hello' && 123) === 123, "&& return the last element if both are true");
const teste2 = 'hello' && 123;
// console.log('teste2', teste2)


///----------------------
const item = {
    name: 'Fabio Jordão',
    age: 34,
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
// console.log('item', item + 0)

const item2 = {
    name: 'Fabio Jordão',
    age: 34,
     //Se for primitivo chama o string 
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
     //se não for primitivo chama o valueOf 
    valueOf() {
        return 007
    }
}
// console.log('item2', item2 + 0)

// console.log('item2.2', ''.concat(item2))


const item3= {
    name: 'Fabio Jordão',
    age: 34,
     //Se for primitivo chama o string 
    toString() {
        console.log('Hey!')
        return `Name: ${this.name}, Age: ${this.age}`
    },
     //se não for primitivo chama o valueOf 
    valueOf() {
        console.log('How')
        return {hey: 'dude'}
    }
}
// console.log('toString', String(item3))
// console.log('valueOf', Number(item3))

const item4= {
    name: 'Fabio Jordão',
    age: 34,
     //Se for primitivo chama o string 
    toString() {
        console.log('Hey!')
        return `Name: ${this.name}, Age: ${this.age}`
    },
     //se não for primitivo chama o valueOf 
    valueOf() {
        console.log('How')
        return {hey: 'dude'}
    },
    [Symbol.toPrimitive](coercionType) {
        console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '007',
        }
        return types[coercionType] || types.string
    }
}

// depois de adicionar o toPrimitive
// console.log('toString', String(item4))
// console.log('valueOf', Number(item4))
//chama o default
// console.log('date', new Date(item4))
// podemos definir o default
// console.log('boolean', !!item4)

console.assert(item4 + 0 === '{"name":"Fabio Jordão","age":34}0')
console.assert('Ae'.concat(item4) === 'Ae{"name":"Fabio Jordão","age":34}')

// console.log('implicit + explicit coertion (using ==)', item4 == String(item4))
console.assert(item4 == String(item4))

const item5 = {...item4, name: 'Zézin', age: 20};
console.assert(item5.name === 'Zézin' && item5.age === 20)


