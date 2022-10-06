

function firstinput(){
    let input = document.getElementById('name');
    let output = document.getElementById('myname')
        output.innerHTML = input.value
        output.value = input.value
}

function email(){
    let input = document.getElementById('e-mail');
    let output = document.getElementById('myemail')
        output.innerHTML = input.value
        output.value = input.value
}

function numbe() {
    let input = document.getElementById('number');
    let output = document.getElementById('mynumber')
        output.innerHTML = input.value   
    let phone = document.getElementById('number').value;
    if(phone.startsWith('070') || phone.startsWith('080') || phone.startsWith('090') || phone.startsWith('081')){
       if(phone.length == 11){
       valid = "Valid"
   }else{
    valid = "Number not valid"
   }
      }else {
        valid = "Number not valid"
      }

document.getElementById('result').innerHTML= valid;   
}


   