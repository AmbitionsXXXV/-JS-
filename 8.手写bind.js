function foo(name, age) {
  console.log(this, name, age)
}

Function.prototype.etcBind = function (thisArg, ...otherArgs) {
  thisArg = thisArg == null ? globalThis : Object(thisArg)
  Object.defineProperty(thisArg, 'fn', {
    enumerable: false,
    configurable: true,
    writable: false,
    value: this
  })

  return (...newArgs) => {
    var allArgs = [...otherArgs, ...newArgs]
    thisArg.fn(...allArgs)
  }
}

var newFoo = foo.etcBind({ name: 'oor' })
newFoo()
