function foo(name, age) {
  console.log(this, name, age)
}

// 1.给函数对象添加方法
Function.prototype.etcApply = function (thisArg, otherArgs) {
  // 1.获取thisArg，并判断以确保是一个对象类型
  thisArg = thisArg == null ? globalThis : Object(thisArg)

  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  })
  thisArg.fn(...otherArgs)

  delete thisArg.fn
}

// foo()
foo.etcApply({ name: "oor" }, ["aimyon", 28])

Function.prototype.etcCall = function (thisArg, ...otherArgs) {
  // 1.获取thisArg，并判断以确保是一个对象类型
  thisArg = thisArg == null ? globalThis : Object(thisArg)

  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  })
  thisArg.fn(...otherArgs)

  delete thisArg.fn
}
