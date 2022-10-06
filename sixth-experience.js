
function expo() {
     
        let output = document.getElementById('nine');
    
        let outputValue =  output.value
        if( outputValue  !='Off' && outputValue != "Turn On the calculator"){
    
       if(outputValue == 0){
        output.value = "";
       }
       output.value +=  "**"
       
    }
    else{
        output.value ="Turn On the calculator";
    }
    } 


function onandoff(){
    let output = document.getElementById('nine');
   var outputValue = output.value;
    if(outputValue =="Off" || outputValue == "Turn On the calculator"){
        output.value = 0
    }else{
        output.value="Off"
    }
    
}

function seven() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  7
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function eight() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  8
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function nine() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  9
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function times() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "*"
   
}
else{
    output.value ="Turn On the calculator";
}
} 
function four() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "*"
   
}
else{
    output.value ="Turn On the calculator";
}
}  

function five() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  5
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function six() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  6
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function minus() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "-"
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function one(){

    let output = document.getElementById('nine');

    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value += 1
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function two() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  2
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function three() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  3
   
}
else{
    output.value ="Turn On the calculator";
}
}  

function plus() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "+"
   
}
else{
    output.value ="Turn On the calculator";
}
}  

function modulus() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "%"
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function zero() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  0
   
}
else{
    output.value ="Turn On the calculator";
}
} 

function divide() {
    let output = document.getElementById('nine');
    
    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=  "/"
   
}
else{
    output.value ="Turn On the calculator";
}
}  


function equals() {
    let output = document.getElementById('nine');
    let result = eval(output.value);

    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){
    
    if(outputValue == 0){
    output.value = "";
    }

        output.value=result
} 
else{
    output.value ="Turn On the calculator";

}
}
 
function clea() {
    let output = document.getElementById('nine');

    let result = output.value 

    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }

    output.value =  ""

}
else{
    output.value ="Turn On the calculator";
}  

}


function del() {
    let output = document.getElementById('nine');
    let result = output.value 

    let outputValue =  output.value
    if( outputValue  !='Off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
        let sliceValue = result.slice(0, -1)
        output.value =  sliceValue
}
else{
    output.value ="Turn On the calculator";
}        
}




document.getElementById('heading').innerHTML="My Sixth Experience with Javascript"
document.getElementById('heading1').innerHTML="<i>Assignment</i>"
document.getElementById('heading2').innerHTML= "JavaScript Calculator"