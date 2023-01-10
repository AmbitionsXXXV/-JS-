function etcDebounce(fn, delay, immediate = false) {
  let timer = null
  let isExec = false

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    if (immediate && !isExec) {
      fn.apply(this, args)
      isExec = true
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
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
