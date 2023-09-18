score=0
function right_answer1(){
 document.getElementById("answer").innerHTML="that is correct!";
 score = score+1
 document.getElementById("score").innerHTML=score;
}

function wa1(){
 document.getElementById("answer").innerHTML="That is wrong the answer was A";
}
function ra2(){
    document.getElementById("answer2").innerHTML="that is correct!";
    score = score+1;
    document.getElementById("score").innerHTML=score;
   }
   
   function wa2(){
    document.getElementById("answer2").innerHTML="That is wrong the answer was c";
   }
   function ra3(){
    document.getElementById("answer3").innerHTML="that is correct!";
    score = score+1;
    document.getElementById("score").innerHTML=score;
   }
   
   function wa3(){
    document.getElementById("answer3").innerHTML="That is wrong the answer was A";
   }
   function ra4(){
    document.getElementById("answer4").innerHTML="that is correct! well done!";
    score = score+1;
    document.getElementById("score").innerHTML=score;
   }
   
   function wa4(){
    document.getElementById("answer4").innerHTML="That is wrong the answer was B";
   }
   function ra5(){
    document.getElementById("answer5").innerHTML="that is correct! well done!";
    score = score+1;
    document.getElementById("score").innerHTML=score+"/5"
   }
   
   function wa5(){
    document.getElementById("answer5").innerHTML="That is wrong the answer was C";
   }