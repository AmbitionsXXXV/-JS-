function etcThrottle(fn, interval) {
  let startTime = 0

  const _throttle = function (...args) {
    const nowTime = new Date().getTime()
    const intervalTime = interval - (nowTime - startTime)
    if (intervalTime <= 0) {
      fn.apply(this, args)
      startTime = nowTime
    }

    return _throttle
  }
}
