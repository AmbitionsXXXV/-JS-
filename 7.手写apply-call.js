function foo(name, age) {
  console.log(this, name, age)
}

// 1.给函数对象添加方法
Function.prototype.etcApply = function (thisArgs, otherArgs) {
  // console.log(this)
  // this.apply(thisArgs)

  // 1.获取thisArgs，并判断以确保是一个对象类型
  thisArgs = thisArgs === null || thisArgs === undefined ? window : Object(thisArgs)

  // thisArgs.fn = this
  Object.defineProperty(thisArgs, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  })
  thisArgs.fn(...otherArgs)

  delete thisArgs.fn
}

// foo()
foo.etcApply({ name: "oor" }, ["aimyon", 28])

Function.prototype.etcCall = function (thisArgs, ...otherArgs) {
  // 1.获取thisArgs，并判断以确保是一个对象类型
  thisArgs = thisArgs === null || thisArgs === undefined ? window : Object(thisArgs)

  // thisArgs.fn = this
  Object.defineProperty(thisArgs, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  })
  thisArgs.fn(...otherArgs)

  delete thisArgs.fn
}
