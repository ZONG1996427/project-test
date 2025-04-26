// 继承
class classA {
  constructor() {

  }
  sayFn() {
    console.log('classA Fn');

  }
}
class classB extends classA {
  constructor() {
    super()
  }
}

const classBInstance = new classB()
classBInstance.sayFn()
