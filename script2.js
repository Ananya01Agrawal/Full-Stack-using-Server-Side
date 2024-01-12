// Function that takes a callback as an argument and executes it after a delay
function delayedExecution(callback, delay) {
    setTimeout(function() {
      console.log(`Executing callback after ${delay} milliseconds`);
      callback(); // Calling the callback function
    }, delay);
  }
  
  // Callback function to be executed
  function myCallback() {
    console.log("Callback function executed!");
  }
  
  // Using the delayedExecution function with myCallback as the callback
  delayedExecution(myCallback, 2000); // The callback will be executed after a 2000 ms (2 seconds) delay
  