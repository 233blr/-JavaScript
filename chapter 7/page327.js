var phone = "123-5678";
function validate(phone) {
  if (phone.length > 8 || phone.length < 7) {
    return false;
  }
  for (var i = 0; i < phone.length; i++) {
    if (i === 3) {
      if (phone.charAt(i) !== "-") {
        return false;
      }
    } else if (isNaN(phone.charAt(i))) {
      return false;
    }
  }

  return 1;
}

var x = validate();
console.log(x);
