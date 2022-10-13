function foo(name, age) {
  console.log(this, name, age)
}

Function.prototype.etcBind = function (thisArgs, ...otherArgs) {
  thisArgs = thisArgs === null || thisArgs === undefined ? window : Object(thisArgs)
  Object.defineProperty(thisArgs, "fn", {
    enumerable: false,
    configurable: true,
    writable: false,
    value: this,
  })
  // console.log(this)
  return (...newArgs) => {
    // var allArgs = otherArgs.concat(newArgs)
    var allArgs = [...otherArgs, ...newArgs]
    thisArgs.fn(...allArgs)
  }
}

var newFoo = foo.etcBind({ name: "oor" })
newFoo()
