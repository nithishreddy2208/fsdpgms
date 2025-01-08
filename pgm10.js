class Bank{
    constructor(accHolder,bal){
        this.accHolder = accHolder;
        this.bal=bal;
    }
    deposit(amount){
        this.bal += amount;
    }
    withdraw(amount){
        if(this.bal >= amount){
            this.bal -= amount;
        }
        else{
            console.log("Insufficient balance");
        }
    }
    displayBal(){
        console.log(`balance : ${this.bal}`);

    }
}
function transfer(from,to,amount){
      if(from.bal>=amount){
        from.withdraw(amount);
        to.deposit(amount);
      }
      else{
        console.log("Insufficient balance");
    }
}

const acc1 = new Bank("John",1000);
const acc2 = new Bank("Jane",500);
transfer(acc1,acc2,1200);
acc1.displayBal();
acc2.displayBal();
