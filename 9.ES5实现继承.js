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
function createInfo(obj, name, age, height, address) {
  var newObj = createObject(obj)
  newObj.name = name
  newObj.age = age
  newObj.height = height
  newObj.address = address

  return newObj
}
