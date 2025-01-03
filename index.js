document.getElementById("Submitbutton").onclick = function() {
   const correctAnswers = ['c', 'a', 'a', 'a', 'a'];
   
   let totalMarks = 0;

   for (let i = 1; i <= correctAnswers.length; i++) {
       const selectedAnswer = document.querySelector(`input[name="lol${i}"]:checked`);
       
       if (selectedAnswer && selectedAnswer.value === correctAnswers[i - 1]) {
           totalMarks += 1;
       }
   }

   document.getElementById("marks").textContent = `Your total marks are ${totalMarks}`;
};
