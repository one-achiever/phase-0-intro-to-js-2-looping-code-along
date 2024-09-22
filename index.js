// Code your solutions in this file
function writeCards(names, event) {
    const messages = []; 
  
    for (let i = 0; i < names.length; i++) {
      
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
      
      messages.push(message);
    }
  
    
    return messages;
  }
  
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const event = "surprise";
  
  const thankYouMessages = writeCards(names, event);
  
  console.log(thankYouMessages);
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrement the number by 1
    }
  }
  