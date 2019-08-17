//the code we know has error
try {
  throw new Error("my custom error");
} catch (error) {
  //catch the error in the code, this only execute if an error is throw in our code block
  console.log("error:", error);
} finally {
  //execute some code regardless wether or not error was thrown
  console.log("this will always execute");
}
