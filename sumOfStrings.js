function adding(num1, num2) {
    let big, small;
    if (num1.length >= num2.length) {
      big = num1;
      small = num2;
    } else {
      big = num2;
      small = num1;
    }
    let carry = 0;
    big = big.split("").reverse().join("");
    small = small.split("").reverse().join("");
    small += "0".repeat(big.length - small.length);
    let x = big.length;
    let res = "";
    for (let i = 0; i < x; i++) {
      if (Number(big[i]) + Number(small[i]) + carry >= 10) {
        if (i !== x - 1) {
          res += (Number(big[i]) + Number(small[i]) + carry) % 10;
          carry = 1;
        } else {
          res += (Number(big[i]) + Number(small[i]) + carry).toString().split("").reverse().join("");
        }
      } else {
        if (i !== x - 1) {
          res += (Number(big[i]) + Number(small[i]) + carry);
          carry = 0;
        } else {
          res += (Number(big[i]) + Number(small[i]) + carry).toString().split("").reverse().join("");
        }
      }
    }
    return res.split("").reverse().join("");
  }
adding("453472474732546376325742364364235765","373")  