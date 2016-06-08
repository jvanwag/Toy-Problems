

//Truncate a String
function truncateString(str, num) {
  if(str.length > num) {
  if(num > 3) {
    var newStr = str.slice(0, num -3);
    var newStr2 = newStr + ("...");
     return newStr2;
  }
  else {
    var newStrs = str.slice(0, num);
    var newStrs2 = newStrs + ('...');
    return newStrs2;
  }
  } else{
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
