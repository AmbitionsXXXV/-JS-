function etcDebounce(fn, delay) {
  let timer = null

  const _debounce = () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }

  return _debounce
}
