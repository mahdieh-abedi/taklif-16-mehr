// tamrin-1-c
function food(name, type, price, time) {
    this.name = name
    this.type = type
    this.price = price
    this.time = time
    this.comments = []
    this.rate = setRate(this.comments)
    this.isReady = false
}

function order(VIP) {
    if (VIP === true) return ({
        price: 0.8 * pizza.price,
        rate: pizza.rate
    }); else return ({
        price: pizza.price,
        rate: pizza.rate
    })
}

function comment(author, rate, text, VIP) {
    this.author = author
    this.date = new Date()
    this.rate = rate
    this.text = text
    this.VIP = VIP
}
const setRate = (userRate) => {
    let average = 0;
    for (const item of userRate) {
        average = average + item.rate / userRate.length;
    }
    return average;
}
const pizza = new food('Pizza', 'Fastfood', 80, 30)
const createComment1 = new comment('Mahdieh', 5, 'Good', true);
const createComment2 = new comment('Babak', 1, 'Bad', true);

pizza.comments.push(createComment1)
pizza.comments.push(createComment2)
pizza['rate']=setRate(pizza.comments)

console.log(pizza)
console.log(order(true))