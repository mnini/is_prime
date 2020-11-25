let number
let divisors

let first = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]


const getDivisors = (n)=>{
    let r = []
    let i = first.length - 1
    while(i<Math.round(Math.sqrt(n))){
        if(n%i===0) {
            r.push(i)
        }
        i++
    }
    r = r.map((x)=>[x, n/x])
    return r
}

const getRandomNumber = ()=>{
    let random = Math.round(Math.random()*10472901
    first.forEach((x)=>{
        if(random%x==0) random = getRandomNumber()
    })
    return random
}

console.log('Is prime?!')
console.log('>> Fanstastic game for whole family...')
console.log(">> Type 'y'||'Y'||'Yes'||'yes' if number is prime.")


const outNumber = () => {
    number = getRandomNumber()
    process.stdout.write(`#${number}? => `)
}

outNumber()

let score = 0
let total = 1
let primesChecked = 0
let ofPrimes = 0

process.stdin.on('data', (answer)=>{
      answer = answer.toString().slice()[0]
      if(answer=='y'||answer=='yes'||answer=='Y'||answer=='Yes') answer = true
      else answer = false
      number_is = ((number)=>{
        divisors = getDivisors(number)
        return divisors.length===0
        })(number)
      if((answer&&number_is)||(!answer&&!number_is)){
        score++
        ofPrimes++
        if(number_is) primesChecked++
        console.log(`Correct! ${score}/${total} guesses right.`)
        console.log(`${ofPrimes}/${primesChecked} just primes.`)
        if(!number_is) {
            console.log(divisors)
        }
      } else {      
        if(number_is) primesChecked++
        console.log(`Incorrect! ${score}/${total} guesses right.`)
        console.log(`${ofPrimes}/${primesChecked} just primes.`)
        if(!number_is) {
            console.log(divisors)
        }
      }
      console.log('')  
      outNumber()
      total++
})
