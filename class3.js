// 多态
class classA {
  constructor() {

  }
  sayFn() {
    console.log('classA Fn');

  }
}
class classB {
  constructor() {

  }
  sayFn() {
    console.log('classB Fn');

  }
}

const classInstance = [new classA(), new classB()]
classInstance.forEach(item => {
  item.sayFn()
})
