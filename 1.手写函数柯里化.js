function etcCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收的参数的个数，可以参数本身需要接收的参数是否一致
    if (args.length >= fn.length) {
      // fn(...args)
      // fn.apply(this, ...args)
      return fn.apply(this, args)
    } else {
      // 没有达到个数时, 需要返回一个新的函数, 继续来接收的参数
      function curried2(...args2) {
        // 接收到参数后, 需要递归调用curried来检查函数的个数是否达到
        return curried.apply(this, args.concat)
      }
      return curried2
    }
  }
  return curried
}

var curry = etcCurrying(add1)

curryAdd(10, 20, 30)
curryAdd(10, 20)(30)
curryAdd(10)(20)(30)
