function av(x) {
  return Math.round(x.reduce((init, curr) => init + curr, 0) / x.length, 0);
}

box.matchingType = function matchingType(x, y) {
  // x and y are random types
  // return boolean
  // (ex. x = 7 and y = "Toptal", should return false),
  // (ex. x = 10 and y = 100, should return true),
  return typeof x === typeof y;
};

box.cube = function cube(x) {
  // x is a number
  // return x cubed
  // (ex. x=3, return 27)
  return x ** 3;
};

// Given x is a string,

// reverse the string x letter by letter.

box.reverseString = function reverseString(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "latpoT morf olleH")
  return x.split("").reverse().join("");
};

box.multiplierCount = function multiplierCount(x, y) {
  // x and y are numbers
  // return a number
  // (ex. x=10, y=5, you should return 2)
  // (ex. x=11, y=2, you should return 5)
  return Math.floor(x / y);
};

box.squareRoot = function squareRoot(x) {
  // x is a number
  // return a number
  return Math.sqrt(x);
};

box.removeAllSpaces = function removeAllSpaces(x) {
  // x is a string
  // return a string
  // (ex. x="   Test   String! ", you should return "TestString!")
  return x.replace(/\s/gim, "");
};

box.countUniqueNumbers = function countUniqueNumbers(x) {
  // x is an array of numbers
  // return a number
  // (ex. x=[1,2,2,2,3,4,20,3] you should return 5 as we have 1,2,3,4,20)

  return new Set(x).size;
};

// countUniqueNumbers([1,2,2,2,3,4,20,3])

// Given arr is an array of characters (a-z),

// sort the array alphabetically and return a number representation for every character that occurred.

box.numberRepresentation = function numberRepresentation(arr) {
  // arr is an array
  // return a number
  // (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..)
  const occurencies = {};
  arr = arr.sort();
  arr.forEach((item) => {
    occurencies[item] = occurencies[item] ? occurencies[item] + 1 : 1;
  });
  let result = "";

  for (let x in occurencies) {
    result += occurencies[x];
  }

  return Number(result);
};

// Given x is a number,

// some digits have circles in their design (ex. 6, 9, 0 has one circle and 8 has two circles).

// Count all circles of a given number.

box.numberOfCircles = function numberOfCircles(x) {
  // x is a number
  // return a number
  // (ex. x=1908, you should return 4)
  // (ex. x=9 you should return 1)
  const circledNumbers = [0, 6, 8, 9];
  x = x.toString();
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    // console.log(i);
    let currNumber = Number(x[i]);
    if (circledNumbers.includes(currNumber)) {
      if (currNumber === 8) {
        result += 2;
      } else {
        result += 1;
      }
    }
  }
  return result;
};

// Given x is a string of one character and y is a string,

// find how many instances of string x are contained in y.

box.charCountInString = function charCountInString(x, y) {
  // x is a string of 1 character
  // y is a string
  // return a number
  // (ex. x='$', y="$he$llo$$$wo$rld", should return 6),

  let occurencies = 0;
  for (let i = 0; i < y.length; i++) {
    if (y[i] === x) occurencies += 1;
  }
  return occurencies;
};

// Given x and y are arrays of numbers,

// find the average of the arrays’ averages.

box.twoArrayAvg = function twoArrayAvg(x, y) {
  // x and y are arrays of numbers
  // return a number
  // (ex. x=[1,2,3],  y=[4,5,6], you should return 3.5)
  let xAv = x.reduce((init, curr) => init + curr, 0) / x.length;
  let yAv = y.reduce((init, curr) => init + curr, 0) / y.length;
  return (xAv + yAv) / 2;
};

// Given x is a string,

// find the first unique character in x.

// Return false if there isn't a unique character in x.

box.firstUniqueChar = function firstUniqueChar(x) {
  // x is a string
  // return a string
  // (ex. x="toptal", you should return "o" because "t" appeared twice);

  const stringCount = {};
  Array.from(x).forEach((str) => {
    stringCount[str] = stringCount[str] ? stringCount[str] + 1 : 1;
  });
  let result = false;
  for (const str in stringCount) {
    if (stringCount[str] === 1) {
      result = str;
      break;
    }
  }
  return result;
};

// Given n is an integer and x is a single-digit number,

// find out how many times the digit x is contained in the sequence between 0 and n (including 0 and n).
box.digitOccurrence = function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)
  let occurencies = x;
  let result = 0;
  while (occurencies <= n) {
    if (occurencies % 10 == x) result++;
    if (occurencies != 0 && Math.floor(occurencies  / 10) == x) {
      result++;
      occurencies++;
    } else if (Math.floor(occurencies / 10) == x - 1)
      occurencies = occurencies + (10 - x);
    else occurencies = occurencies + 10;
  }
  return result;
};

// digitOccurrence( 100,1 ) = 12expected: 21

// digitOccurrence( 100,0 ) = 11expected: 12
// Given x is a string,

// find the average of ASCII codes of all characters and round to the closest integer, then return the character representing that ASCII code.

box.averageAsciiChar = function averageAsciiChar(x) {
  // x is a string
  // return a character
  // (ex. x="Hello World!", you should return "Z")
  let sumAscii = 0;
  for (let i = 0; i < x.length; i++) {
    sumAscii += x[i].charCodeAt();
  }
  const asciicode = Math.round(sumAscii / x.length);
  return String.fromCharCode(asciicode);
};

// Given x and y are strings,

// a shift is taking the leftmost character in x and moving to the rightmost position.

// Identify if x can become y after several shifts.

box.isRotatedStr = function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
  // it will match y)
  const xArray = x.split("");
  const lastWord = xArray.splice(0, 1);
  const firstWord = [...xArray, lastWord].join("");
  function checkWord(word) {
    if (word === y) return true;
    if (word === x) return false;
    const xArray = word.split("");
    const lastWord = xArray.splice(0, 1);
    return checkWord([...xArray, lastWord].join(""));
  }
  return checkWord(firstWord);
};

// Given x is a HEX color code (ex. #FFFFFF),

// convert that HEX color code to RGB and return it as an array [R, G, B].

box.hexToRGB = function hexToRGB(x) {
  // x is a string
  // return an array
  // (ex. x="#FFFFFF", you should return [255, 255, 255])
  c = x.substring(1).split("");
  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
};

// Given password is a string, which consists of mixed characters (a-z, A-Z, 0-9), and x is an integer,

// hash the password by shifting every character by given x positions and reverse to lowercase/uppercase.

box.hashPassword = function hashPassword(password, x) {
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
};

// Given x is a string in the format of “X.X.X.X”,

// check if x is a valid IP address in which a valid IP address matches "X.X.X.X" format and every "X" represents a number between 0 to 255.
box.validateIP = function validateIP(x) {
  // x is a string in the format of "X.X.X.X"
  // return boolean
  // (ex. x="127.0.0.1", you should return true)
  // (ex. x="555.123.123.1". you should return false because first part is greater than 255)
};

// Given x is a string representing a Roman numeral,

// convert Roman numerals to numbers.

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.

box.romanToInt = function romanToInt(x) {
  // x is a string; roman numeral
  // return a number
  // (ex. x="IV", you should return 4)
};
