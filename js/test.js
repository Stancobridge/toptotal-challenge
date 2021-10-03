function hashPassword(password, x) {
  // password is a string, x is a number
  // return a string
  // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
  const splitPassword = password.split("");
  let result = "";
  splitPassword.forEach((char) => {
    // check if it is not a number
    if (isNaN(char)) {
      // get the ascii code
      let code = char.charCodeAt();
      // check if it is small letter
      code += x;
      if (char === char.toLowerCase()) {
        // result += "lower";
        let limit = 122;
        if (code > limit) {
          const toAdd = code - limit;
          result += String.fromCharCode(toAdd + 64);
        } else {
          result += String.fromCharCode(code).toUpperCase();
        }
      } else {
        let limit = 90;
        if (code > limit) {
          const toAdd = code - limit;
          result += String.fromCharCode(toAdd + 121);
          // console.log("here");
        } else {
          // console.log(String.fromCharCode(code).toUpperCase());
          console.log(String.fromCharCode(code));
          result += String.fromCharCode(code).toLowerCase();
        }
        // result += "upper";
      }
    } else {
      result += Number(char) + x;
    }
  });

  return result;
}
console.log(hashPassword("AB1dsjy8ajdsBy", 5));
