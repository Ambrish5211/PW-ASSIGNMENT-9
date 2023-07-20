
const customer = {
  
  name:"Ambrish",
  balance: 100,

  deposit (amount) {
    
   this.balance = this.balance + amount;
   console.log(`Updated balance is ${this.balance}`)
  },

  withdraw(amount){
    if(amount > this.balance) {
      console.log('Not enough balance in account');
    }
    else
    {
      this.balance = this.balance - amount;
      console.log(`Updated balance is ${this.balance}`);
    }

  }

  }

 customer.deposit(500);
 customer.withdraw(200);

 