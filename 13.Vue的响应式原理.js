/**
 * 1.dep对象数据结构的管理(最难理解)
 * 每一个对象的每一个属性都会对应一个dep对象
 * 同一个对象的多个属性的dep对象是存放一个map对象中
 * 多个对象的map对象, 会被存放到一个objMap的对象中
 * 2.依赖收集: 当执行get函数, 自动的添加fn函数
 */
class Depend {
  constructor() {
    // this.reactiveFns = []
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }

  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn()
    })
  }
}

const obj = {
  band: 'oor',
  member: 4
}

// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个函数: 负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key, 找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}
// 方案一: Object.defineProperty() -> Vue2
// function reactive(obj) {
//   Object.keys(obj).forEach(key => {
//     let value = obj[key]

//     Object.defineProperty(obj, key, {
//       set: function(newValue) {
//         value = newValue
//         const dep = getDepend(obj, key)
//         dep.notify()
//       },
//       get: function() {
//         // 拿到obj -> key
//         // console.log("get函数中:", obj, key)
//         // 找到对应的obj对象的key对应的dep对象
//         const dep = getDepend(obj, key)
//         // dep.addDepend(reactiveFn)
//         dep.depend()

//         return value
//       }
//     })
//   })
//   return obj
// }

// 方式二: new Proxy() -> Vue3
function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function (target, key, newValue, receiver) {
      // target[key] = newValue
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    },
    get: function (target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      return Reflect.get(target, key, receiver)
    }
  })
  return objProxy
}

watchFn(function foo() {
  console.log('foo:', obj.band)
  console.log('foo', obj.member)
  console.log('foo function')
})
