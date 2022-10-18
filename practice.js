
let scores = [40,15,77,80,39,35];

for(let m = 0; m < scores.length; m++){
if(scores[m] >= 50){
    output.innerHTML += scores[m] + "passed<br>";
    
}
    
    else if (scores[m] + 10 >= 50){
            output.innerHTML += scores[m] +  "You failed in your previous score but passed after adding 10marks" + " " + (scores[m] + 10)  + "<br>"
    }

    else{
        output.innerHTML += scores[m] + 10 + "You failed in your previous score but failed even after adding 10marks" + " " + scores[m] + "<br>"
    }
    }

// Concat
function concat() {
    var surName = ["Oluwasami"];
    var name = ["Sarah", "Tobiloba", "Ayoola"];
    var fullName = surName.concat(name); 
    document.getElementById("concat").innerHTML = fullName;
  }
        
// // findIndex
//  var ages = [3, 10, 18, 20];

// function checkAdult(age) {
//     return age >= 18;
//   }
  
//   function findIndex() {
//     document.getElementById("findindex").innerHTML = ages.findIndex(checkAdult);
//   }
       
   