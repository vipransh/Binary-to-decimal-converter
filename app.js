let binaryNumber=document.getElementById("binary");
let submitButton=document.querySelector(".row .btn");
let result=document.querySelector(".row .result");


submitButton.addEventListener("click", (value) =>{
    converter(binaryNumber.value);
    value.preventDefault();
});


// binary to decimal converter function

function converter(number){
    let val=0;
    let powerCounter=0;
    let flag=true;
    while(number){
        console.log(powerCounter);
        let n=number%10;
        if(n>1)
        {
            result.innerHTML="Incorrect Format";  
            flag=false;
            break;
        }
        val=val+(n*(Math.pow(2,powerCounter)));
        powerCounter++;
        number=Math.floor(number/10);
    }
    if(flag)
    result.innerHTML="Decimal Number: "+val;
}