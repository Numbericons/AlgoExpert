class MyArray {
  constructor(...args) {
    this.state = {};

    args.forEach((el,i) => { this.state[i] = el });
    this.last = args.length - 1;
  }

  top() {
    return this.state[this.last];
  }

  bottom() {
    return this.state[0];
  }

  push(el) {
    this.last += 1;
    this.state[this.last] = el;
    // this.last === -1 ? this.state[0] = el : 

    return this.last + 1;
  }
 
  pop(el) {
    if (this.last === -1) return 'Array is already empty';

    const element = this.state[this.last];
    delete this.state[this.last];

    this.last -= 1;

    return element;
  }

  unshift(el) {
    const keys = Object.keys(this.state);

    for (let i = keys.length - 1; i >= 0; i--) {
      let key = parseInt(keys[i]);
      this.state[key + 1] = this.state[key];
    }

    this.state[0] = el;
    this.last += 1;

    return this.last + 1;
  } 

  shift(el) {
    if (this.last === -1) return 'Array is already empty';

    const element = this.state[0];
    delete this.state[0];

    const keys = Object.keys(this.state);

    for (let i = 0; i <= keys.length - 1; i++) {
      let key = parseInt(keys[i]);
      this.state[key - 1] = this.state[key];
    }

    delete this.state[this.last];
    
    this.last -= 1;

    return element;
  }
};

//Test Code

let array = new MyArray('a', 'b', 'c', 'd');
console.log(array.last);
console.log(array.state);
console.log('')
console.log('--------------------------------------------------')
console.log('')

array.pop();
array.pop();
array.pop();
array.pop();
console.log(array.last);
console.log(array.state);
console.log('')
console.log('--------------------------------------------------')
console.log('')

array.push('a');
array.push('b');
array.push('c');
console.log(array.last);
console.log(array.state);
console.log('')
console.log('--------------------------------------------------')
console.log('')

array.unshift('a2');
array.unshift('b2');
array.unshift('c2');
console.log(array.last);
console.log(array.state);
console.log('')
console.log('--------------------------------------------------')
console.log('')

array.shift();
array.shift();
array.shift();
array.shift();
console.log(array.last);
console.log(array.state);
console.log('')
console.log('--------------------------------------------------')
console.log('')