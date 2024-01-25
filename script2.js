function compressing(uploading, taskCompleted) {
    setTimeout(() => {
        console.log('Compressing the video...');
        uploading(taskCompleted);
    }, 3000)
}
compressing((taskCompleted) => {  
    setTimeout(() => {
        console.log('Uploading the video...');
        taskCompleted();
    }, 3000)
},  
() => {
    setTimeout(() => {
        console.log("Task completed");
    }, 5000)
  } 
)