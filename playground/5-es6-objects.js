//Object property shorthand

const name = 'Vicente'
const userAge = '38'

const user = {
    name,
    age: userAge,
    location: 'Austin'
}
console.log(user)

//Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {
    label: productLabel, 
    stock,
    price
} = product
console.log('desctructuring1 --> ', productLabel, stock, price)


const transaction = (type, {label, stock}) =>  {
    console.log('desctructuring2 --> ', label, stock)
}
transaction('order', product)


