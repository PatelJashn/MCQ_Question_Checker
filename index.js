document.getElementById("Submitbutton").onclick = function() {
   let answers1 = document.getElementsByName("lol1");
   let answers2 = document.getElementsByName("lol2");
   let answers3 = document.getElementsByName("lol3");
   let answers4 = document.getElementsByName("lol4");
   let answers5 = document.getElementsByName("lol5");

   let solution1, solution2, solution3, solution4, solution5;

   for (let answer1 of answers1) {
       if (answer1.checked) {
           solution1 = answer1.value;
       }
   }
   for (let answer2 of answers2) {
       if (answer2.checked) {
           solution2 = answer2.value;
       }
   }
   for (let answer3 of answers3) {
       if (answer3.checked) {
           solution3 = answer3.value;
       }
   }
   for (let answer4 of answers4) {
       if (answer4.checked) {
           solution4 = answer4.value;
       }
   }
   for (let answer5 of answers5) {
       if (answer5.checked) {
           solution5 = answer5.value;
       }
   }

   let totalmarks = 0;

   if (solution1 === 'c') {  
       totalmarks += 1;
   }
   if (solution2 === 'a') {  
       totalmarks += 1;
   }
   if (solution3 === 'a') {  
       totalmarks += 1;
   }
   if (solution4 === 'a') {  
       totalmarks += 1;
   }
   if (solution5 === 'a') {  
       totalmarks += 1;
   }

   document.getElementById("marks").textContent = `Your total marks are ${totalmarks}`;
};
