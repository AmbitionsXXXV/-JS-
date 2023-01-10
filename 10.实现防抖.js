function etcDebounce(fn, delay) {
  let timer = null

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }

  // 添加取消事件的功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
  }

  return _debounce
}
