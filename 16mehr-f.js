// tamrin-1-f

function food(name, type, price, time) {
    return {
        name,
        type,
        price,
        time,
        comments: [],
        rate: 0,
        isReady: false
    }
}
function comment(author, rate, text, VIP) {
    return {
        author,
        date: new Date(),
        rate,
        text,
        VIP
    }
}
const setRate = (userRate) => {
    let average = 0;
    for (const item of userRate) {
        average = average + item.rate / userRate.length;
    }
    return average;
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
const pizza = new food('Pizza', 'Fastfood', 80, 30)
const createComment1 = new comment('Mahdieh', 5, 'Good', true);
const createComment2 = new comment('Babak', 1, 'Bad', true);

pizza.comments.push(createComment1)
pizza.comments.push(createComment2)
pizza['rate'] = setRate(pizza.comments)
console.log(pizza)
console.log(order(true))
