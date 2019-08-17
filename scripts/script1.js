import $ from "jquery";

let promise = $.get(
  data => console.log("Success: ", data),
  error => console.log("error: ", error)
);
