
function expo() {
    let output = document.getElementById('nine');
        output.value += "**"
} 

function decimal() {
    let output = document.getElementById('nine');
        output.value += "."
} 

function seven() {
    let output = document.getElementById('nine');
        output.value += 7
} 

function eight() {
    let output = document.getElementById('nine');
        output.value += 8
} 

function nine() {
    let output = document.getElementById('nine');
        output.value += 9
} 

function times() {
    let output = document.getElementById('nine');
        output.value += "*"
} 

function four() {
    let output = document.getElementById('nine');
        output.value += 4
} 

function five() {
    let output = document.getElementById('nine');
        output.value += 5
} 

function six() {
    let output = document.getElementById('nine');
        output.value += 6
} 

function minus() {
    let output = document.getElementById('nine');
        output.value += "-"
} 

function one() {
    let output = document.getElementById('nine');
        output.value += 1
} 

function two() {
    let output = document.getElementById('nine');
        output.value += 2
} 

function three() {
    let output = document.getElementById('nine');
        output.value += 3
} 

function plus() {
    let output = document.getElementById('nine');
        output.value += "+"
} 

function modulus() {
    let output = document.getElementById('nine');
        output.innerHTML += "%"
} 

function zero() {
    let output = document.getElementById('nine');
        output.value += 0
} 

function divide() {
    let output = document.getElementById('nine');
        output.value += "/"
} 

function equals() {
    let output = document.getElementById('nine');
    let result = eval(output.value);
        output.value=result
} 
 
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#nine").value = " "
})

const del = () =>{
    const num = document.querySelector("#nine").value.slice(0, -1)
    document.querySelector("#nine").value = num
}



document.getElementById('heading').innerHTML="My Sixth Experience with Javascript"
document.getElementById('heading1').innerHTML="<i>Assignment</i>"
document.getElementById('heading2').innerHTML="JavaScript Calculator"