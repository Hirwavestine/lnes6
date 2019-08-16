let app = (function() {
  let name = "Hirwa Vestine";
  let getName = function() {
    return name;
  };
  return {
    getName: getName
  };
})();
console.log(app.getName());
