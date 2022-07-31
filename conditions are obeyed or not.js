const Is_Valid = (a,b) => {
    let result;
    if (a < 10 && a > b) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
};
console.log(Is_Valid(7,5));