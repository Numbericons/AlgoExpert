function caesarCipherEncryptor(string, key) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let caeserArr = [];

  for (let i=0; i<string.length; i++){
    let idx = alpha.indexOf(string[i]) + key;
    caeserArr.push(alpha[idx % alpha.length]);
  }

  return caeserArr.join("");
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;


let result = caesarCipherEncryptor("xyz", 2);
console.log(result);

// string = "xyz"
// key = 2

// naive: iterate string adding shifting chars to new string and return;