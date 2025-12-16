let accountBalance = 400;
let depositAmountFromUser = "10";

// แปลง String เป็น Number ด้วยคำสั่ง Number()
accountBalance = accountBalance + Number(depositAmountFromUser); 

let accountBalanceMessage = `Your account balance is ${accountBalance}`;
console.log(accountBalanceMessage);