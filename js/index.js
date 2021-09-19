import  TipCalculator from "../js/tipCal.js";


let obj = new TipCalculator();



// if selected-tile class already being applied remove this class changes the color when user selects a percentage tile
function changePercenatageTiles(){

    let percentageTiles = document.querySelectorAll(".tip-selection-c__tip-percentage span:not(:last-child)");
    
    percentageTiles.forEach(tile => {

        
        if(tile.classList.contains("selected-tile"
        )){
            tile.classList.remove("selected-tile");
        }
        
           
    })
    
}

// select each percentage tile
let percentageTiles = document.querySelectorAll(".tip-selection-c__tip-percentage span:not(:last-child)");



// for each tile get its value
percentageTiles.forEach(tile => {
    
    
    tile.addEventListener("click",() => {
        
        
          changePercenatageTiles();

          const value = tile.getAttribute("data-percentage");
          obj.setTip(value);             
          
          tile.classList.add("selected-tile");
          obj.totalBillCalculator();

          const customTile = document.querySelector(".tip-selection-c__tip-percentage span:last-child"); 
          customTile.textContent = "Custom";
          customTile.addEventListener("click" , addInputField);

    })

    
})

function readCustomPer(){

     const perTile = document.getElementById("customPercenatageTile");

    perTile.addEventListener("keyup" , () => {
    const customPer =  parseInt(perTile.value);
    
    if(customPer === 0){
        console.log("bill cannot be zero");
    } 
    // if custom percentage greater than zero
    else if(customPer < 0){
        console.log("bill cannot be less than zero");
    } 
    // if not above the cases set the custom percentage
    else if(customPer)
    {
        obj.setTip(customPer);
        obj.totalBillCalculator();
    }
})

}

function addInputField(){

    const customTile = document.querySelector(".tip-selection-c__tip-percentage span:last-child");
    changePercenatageTiles();
    customTile.innerHTML = "   <input type='number' name='customPercenatageTile' id='customPercenatageTile' min = '0' value = '0'>";
    customTile.removeEventListener("click",addInputField);
    readCustomPer()
    
}


//selecting the custom percenatge tile
  
const customTile = document.querySelector(".tip-selection-c__tip-percentage span:last-child");
customTile.addEventListener("click" , addInputField);





// select bill input field
let billInputField = document.getElementById("billInputField");



//whenever the user releases the key this event will happen
billInputField.addEventListener("keyup" , () => {
    
    const inputField = document.querySelector(".billInputField");
    if(inputField.classList.contains("invalidInput")){
        inputField.classList.remove("invalidInput");
    }
    
    const error = document.querySelector(".errorMessage-bill");
    error.textContent = " "; 
     


    let bill = billInputField.value;
    bill = parseFloat(bill);
    // if bill is equal to zero
    if(bill === 0){
        error.textContent = "cannot be zero";
        inputField.classList.add("invalidInput");
    } 
    // if bill greater than zero
    else if(bill < 0){
        error.textContent = "cannot be negative";
        inputField.classList.add("invalidInput");
    } 
    // if not above the cases set the bill
    else if(bill)
    {
        obj.setBill(bill);
        obj.totalBillCalculator();
    }

})


billInputField.addEventListener("input" , () => {
    resetBtn.addEventListener("click" , resetFun);

})


// select number of person input field
let numberOfPersons = document.getElementById("numberOfPersons");

//whenever the user releases the key this event will happen
numberOfPersons.addEventListener("keyup" , () => {
    const inputField = document.querySelector(".noOfPerInputField");
    if(inputField.classList.contains("invalidInput")){
        inputField.classList.remove("invalidInput");
    }

    const error = document.querySelector(".errorMessage--noOfPerson");
    error.textContent = " "; 
     

    let personsNo = numberOfPersons.value;
    personsNo = parseFloat(personsNo);
    console.log(typeof personsNo ,"personsNoamount " +  personsNo);

    // if personsNo is equal to zero
    if(personsNo === 0){
        error.textContent = "cannot be zero"; 
        inputField.classList.add("invalidInput");
    } 
    // if personsNo greater than zero
    else if(personsNo < 0){
        error.textContent = "cannot be negative"; 
        inputField.classList.add("invalidInput");
    } 
    // if not above the cases set the personsNo
    else if(personsNo)
    {
        obj.setNoOfPersons(personsNo);
        obj.totalBillCalculator();

    }

})

function resetFun(){

    obj = new TipCalculator();
    billInputField.value = 0;
    numberOfPersons.value = 0;
    obj.showAmount();
    const selectedTile = document.querySelector(".selected-tile");
    if(selectedTile){
        selectedTile.classList.remove("selected-tile");
    }
    console.log("reset-btn is pushed");
}

const resetBtn = document.querySelector(".show-billing-component-c__reset-btn");

numberOfPersons.addEventListener("input" , () => {
    resetBtn.addEventListener("click" , resetFun);

})
