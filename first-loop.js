
        let output = document.getElementById('output')
        let scores = [40,15,77,55,49,53];
        let result = ""

        for(let m = 0; m < scores.length; m++){
            let punishment = (scores[m]) - 5
            if(punishment >= 50){
                result += scores[m] + " " + "passed<br>";
                
            }
                
                else if ((punishment + scores[m]) / 2){
                    if(((punishment + scores[m]) / 2) > 50){
                        result += scores[m] + " " + "You escaped the punishment" + "<br>";

                        
                     }else{
                        result += scores[m] + " "  + "You are trapped in the punishment" +"<br>";
                }
                }

                }
                    