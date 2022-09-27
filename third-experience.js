// Ternary Operator

let score = 80;
let result = (score >= 80) ? "A": "Below A";

let score1 = 60;
let result1 = (score >= 60) ? "B": "Below B";

let score2 = 50;
let result2 = (score >= 50) ? "C": "Below C";

let score3 = 40;
let result3 = (score >= 40) ? "D": "Below D";

let score4 = 30;
let result4 = (score >= 30) ? "E": "Below E";

// Link Generator

let rand = Math.random();
let link= (rand < 0.5)? "<a href='https://www.pinterest.com/'> Pinterst</a>" : "<a href='https://nilds.gov.ng'>NILDS</a>"

let rand1 = Math.random();
let link1= (rand < 0.5)? "<a href='http://www.javascriptkit.com'>JavaScript Kit</a>" : "<a href='http://www.dynamicdrive.com'>Dynamic Drive</a>"

let rand2 = Math.random();
let link2= (rand < 0.5)? "<a href='http://www.codingforums.com/'>Coding Forums</a>" : "<a href='http://www.cssdrive.com'>Css Drive</a>"



document.getElementById('suboperator').innerHTML="Grade A";
document.getElementById('ans').innerHTML="<code>let Score = 80</code> <br/> <code> let result = (score >= 80) ? \"A\": \"Below A\"</code><br/> Result:" +  result;

document.getElementById('suboperator1').innerHTML="Grade B";
document.getElementById('ans1').innerHTML="<code>let Score1 = 60</code> <br/> <code> let result1 = (score >= 60) ? \"B\": \"Below B\"</code><br/> Result:" +  result1;

document.getElementById('suboperator2').innerHTML="Grade C";
document.getElementById('ans2').innerHTML="<code>let Score2 = 50</code> <br/> <code> let result2 = (score >= 50) ? \"C\": \"Below C\"</code><br/> Result:" +  result2;

document.getElementById('suboperator3').innerHTML="Grade D";
document.getElementById('ans3').innerHTML="<code>let Score3 = 40</code> <br/> <code> let result3 = (score >= 40) ? \"D\": \"Below D\"</code><br/> Result:" +  result3;

document.getElementById('suboperator4').innerHTML="Grade E";
document.getElementById('ans4').innerHTML="<code>let Score4 = 30</code> <br/> <code> let result4 = (score >= 30) ? \"E\": \"Below E\"</code><br> Result:" +  result4;

document.getElementById('heading3').innerHTML="Link Generator"

document.getElementById('suboperatorlink').innerHTML="Link I";
document.getElementById('anslink').innerHTML="<code>let Rand = Math.random()</code> <br/> <code> let link= (rand < 0.5)? \"<a href='https://www.pinterest.com/'>PINTEREST</a>\" : \"<a href='https://nilds.gov.ng'>NILDS</a>\"</code><br/> Result:" +  link ;

document.getElementById('suboperator1link').innerHTML="Link II";
document.getElementById('ans1link').innerHTML="<code>let Rand1 = Math.random()</code> <br/> <code> let link1= (rand < 0.5)? \"<a href='http://www.javascriptkit.com'>JAVASCRIPT KIT</a>\" : \"<a href='http://www.dynamicdrive.com'>DYNAMIC DRIVE</a>\"</code><br/> Result:" +  link1 ;

document.getElementById('suboperator2link').innerHTML="Link III";
document.getElementById('ans2link').innerHTML="<code>let Rand2 = Math.random()</code> <br/> <code> let link2= (rand < 0.5)? \"<a href='http://www.codingforums.com/'>CODING FORUMS</a>\" : \"<a href='http://www.cssdrive.com'>CSS DRIVE</a>\"</code><br/> Result:" +  link2 ;


document.getElementById('heading').innerHTML="My Fourth Experience with Javascript"
document.getElementById('experience').innerHTML="We moved to the next operator which is, Comparison Operator: it uses boolean (true/false) <br>i.e <code>let a =12</code> <br> <code> a == 10</code> <br> Answer: False <br> The other examples of comparison operator are: >, <, >=, <=, === {compares both the data types and value} <br> i.e. <code>let a = 12</code> <code>console.log(23 === '23')</code> <br>  Answer: False"
document.getElementById('heading1').innerHTML="<i>Assignment</i>"
document.getElementById('heading2').innerHTML="Ternary Operator"
// document.getElementById('content').innerHTML="The ternary operator is the only JavaScript operator that takes three operands: a condition followed by a question mark(?), then an expression to execute if the condition is truthy followed by a colon(:), and finally the expression to execute is falsy"
