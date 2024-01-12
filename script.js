function first(second){
    console.log("First function");
    console.log(second)
}
//here second function is callback function
function second() {
    console.log("Second function");
}
first(second);