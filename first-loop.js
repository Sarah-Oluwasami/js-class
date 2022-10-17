
        let output = document.getElementById('output')
        let scores = [40,15,77,55,49,53];

        for(let m = 0; m < scores.length; m++){
            let punishment = (scores[m]) - 5
            if(punishment >= 50){
                output.innerHTML += scores[m] + " " + "passed<br>";
                
            }
                
                else if ((punishment + scores[m]) / 2){
                    if(((punishment + scores[m]) / 2) > 50){
                        output.innerHTML += scores[m] + " " + "You escaped the punishment" + "<br>";

                        
                     }else{
                        output.innerHTML += scores[m] + " "  + "You are trapped in the punishment" +"<br>";
                }
                }

                }
                    