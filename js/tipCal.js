export default class TipCalculator{

    constructor(){
         this.bill = 0;
         this.tipPercentage  = 0;
         this.tip            = 0;
         this.tipPerPerson = 0;
         this.billPerPerson = 0;
         this.numberOfPersons = 0;
         this.origBill        = 0;
    }



        
        setTip(tip){
             this.tipPercentage = parseInt(tip);
        }

        setBill(bill){
            this.origBill = bill;
            console.log("bill" , this.origBill);
        }

        setNoOfPersons(numberOfPersons){
          
            this.numberOfPersons = numberOfPersons;
            console.log("personsNumber" + this.numberOfPersons);

        }

        calculateTotalBill(){

            this.tip = this.origBill * (this.tipPercentage / 100);
            this.bill = this.tip + this.origBill;
            console.log("total bill" , this.bill);

        }

        calculateTipPerPerson(){
            this.tipPerPerson = this.tip / this.numberOfPersons;
            console.log("tipPerPerson" ,this.tipPerPerson);
        }

        calculateBillPerPerson(){
            this.billPerPerson = this.bill / this.numberOfPersons;
            console.log("billPerPerson" ,this.billPerPerson);
        }

        totalBillCalculator(){
            if(this.tipPercentage && this.numberOfPersons && this.origBill){
                this.calculateTotalBill();
                this.calculateBillPerPerson();
                this.calculateTipPerPerson();
                this.showAmount();
            }
        
        }

        showAmount(){

            document.getElementById("tipPerPerson").textContent = `$${this.tipPerPerson.toFixed(2)}`;

            document.getElementById("billPerPerson").textContent = `$${this.billPerPerson.toFixed(2)}`;
        }

    }
