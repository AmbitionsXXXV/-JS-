var obj = {
  name: 'why',
  age: 18
}

// 原型式继承
function createObject(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

// 寄生组合式函数
function inherit(Subtype, Supertype) {
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
  Object.setPrototypeOf(Subtype, Supertype)
}
