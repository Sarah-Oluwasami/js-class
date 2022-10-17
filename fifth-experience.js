let score = 14;
if(score >= 70 && score <= 100){
    result = ('A')
   }else if(score >= 60 && score <= 69 ){
     result = ('B');
   }else if(score >= 50 && score <= 59){
       result =('C');
   }else if(score >= 40 && score <= 49){
       result =('D');
   }else if(score >= 30 && score <= 39){
       result =('E');
   }else result =('F');
    

document.getElementById('heading').innerHTML="My Fifth Experience with Javascript"
document.getElementById('experience').innerHTML="We moved to the next operator which is, Conditional Statement:it means that the assignment can only be executed if the condition given is met <br>i.e <code>let a =2</code> <br> <code> If (a == 10){cosole.log(\"Hello\");} </code> <br> <code>else{console.log(\"I'm A\")}</code><br> Answer: I'm A"
document.getElementById('heading1').innerHTML="Conditional Statement"
document.getElementById('heading2').innerHTML="Examination Grading"

document.getElementById('score').innerHTML="<code>let Score = 14</code> <br/> <code> if(score >= 70 && score <= 100){</code><br/> <code>result = ('A');</code> <br> <code> }else if(score >= 60 && score <= 79) </code><br/> <code>result = ('B');</code> <br> <code>}else if(score >= 50 && score <= 59) </code><br/> <code>result = ('C');</code> <br> <code>}else if(score >= 40 && score <= 49) </code><br/> <code>result = ('D');</code> <br><code>}else if(score >= 30 && score <=39) </code><br/> <code>result = ('E');</code> <br> <code>}else result = ('F');</code> <br> Result:" +  result;
console.log(result)