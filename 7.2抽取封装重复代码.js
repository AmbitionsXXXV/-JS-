function foo(name, age) {
  console.log(this, name, age)
}

function combine(thisArg, otherArgs, fn) {
  // 1.获取thisArg，并判断以确保是一个对象类型
  thisArg = thisArg == null ? globalThis : Object(thisArg)

  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: fn,
  })
  thisArg.fn(...otherArgs)

  delete thisArg.fn
}

Function.prototype.etcApply = function (thisArg, otherArgs) {
  combine(thisArg, otherArgs, this)
}

Function.prototype.etcCall = function (thisArg, ...otherArgs) {
  combine(thisArg, otherArgs, this)
}

foo.etcApply({ name: "oor" }, ["aimyon", 28])
foo.etcCall({ name: "oor" }, "aimyon", 28)
