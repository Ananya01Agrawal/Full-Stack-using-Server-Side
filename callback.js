// Define a function named 'compressing' that takes a callback function 'upload' as a parameter
function compressing(upload) {
    // Set a timeout to simulate the process of compressing a video after 3000 milliseconds (3 seconds)
    setTimeout(() => {
        // Log a message indicating that the video is being compressed
        console.log('Compressing the video...');
        // Call the 'upload' callback function once the compression is done
        upload(taskCompleted);
    }, 3000)
}

// Define a function named 'uploading'
function uploading() {
    // Set a timeout to simulate the process of uploading a video after 5000 milliseconds (5 seconds)
    setTimeout(() => {
        // Log a message indicating that the video is being uploaded
        console.log('Uploading the video...');
        // Call the 'taskCompleted' function once the uploading is done
        taskCompleted();
    }, 5000)
}

// Define a function named 'taskCompleted'
function taskCompleted() {
    // Set a timeout to simulate a delay after completing a task after 7000 milliseconds (7 seconds)
    setTimeout(() => {
        // Log a message indicating that the task is completed
        console.log('Task completed');
    }, 7000)
}

// Call the 'compressing' function and pass the 'uploading' function as a callback
compressing(uploading);
