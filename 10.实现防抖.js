// 需要函数调用后有返回值
// 方式一：回调函数
function etcDebounce(fn, delay, immediate = false, callback) {
  let timer = null
  let isExec = false

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    let res = undefined
    if (immediate && !isExec) {
      res = fn.apply(this, args)
      if (callback) callback(res)
      isExec = true
      return
    }

    timer = setTimeout(() => {
      res = fn.apply(this, args)
      if (callback) callback(res)
      timer = null
      isExec = false
    }, delay)
  }

  // 添加取消事件的功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isExec = false
  }

  return _debounce
}
