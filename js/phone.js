//FROM YOU DON'T KNOW JAVASCRIPT BOOK
//MODIFYED BY ME

const will = 250
const phone = 200
const acce = 15
const rate = .013

money = prompt ('Money to spend on phone(s): ');
amount = 0;
q = 0;

function tax (amount){
    return amount *= rate;
}

function printvalue (amount){
    return '$' + amount.toFixed ( 2 )
}

if (money < phone){
    prompt('Go exchange more of your time earning money!')
}
else{
    while(amount < money){
        amount += phone + acce;
        q += 1;
    }
}

prompt('Your purchase: ' + printvalue ( amount ) + '\nplus ' + tax( amount ).toFixed (2) + '\nYou got ' + q + ' phone(s)');
