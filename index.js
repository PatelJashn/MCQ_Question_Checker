document.getElementById("Submitbutton").onclick = function() {
   // Array of correct answers
   const correctAnswers = ['c', 'a', 'a', 'a', 'a'];
   
   let totalMarks = 0;

   // Loop through each question
   for (let i = 1; i <= correctAnswers.length; i++) {
       const selectedAnswer = document.querySelector(`input[name="lol${i}"]:checked`);
       
       // Check if the selected answer matches the correct one
       if (selectedAnswer && selectedAnswer.value === correctAnswers[i - 1]) {
           totalMarks += 1;
       }
   }

   document.getElementById("marks").textContent = `Your total marks are ${totalMarks}`;
};
