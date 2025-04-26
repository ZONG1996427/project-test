// 组合
class classA {
  constructor(name) {
    this.name = name
  }
  sayFn() {
    console.log(this.name, '子类传过来的');

    console.log('classA Fn');

  }
}
class classB {
  constructor() {
    this.classAInstance = new classA('zs')

  }
}
const classBInstance = new classB()
classBInstance.classAInstance.sayFn()
