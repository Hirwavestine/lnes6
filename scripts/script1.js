//the code we know has error
try {
  let car = "newCar";
  //catch the error in the code, this only execute if an error is throw in our code block
} catch (error) {
  console.log("error:", error);
} finally {
  console.log("continuing");
}
