let number = document.getElementById("total");
let count=0;
function increment() {
    count+=1;
    number.innerHTML=count;

}


//save no of passanger at every departure
let  totalPassenger = document.getElementById("totalPassenger");
function save() {
let countstr=count +" - ";
    totalPassenger.innerHTML+=countstr;
    number.innerHTML=count=0;
}

