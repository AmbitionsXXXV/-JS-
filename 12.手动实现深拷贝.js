function isObject(value) {
  const valueType = typeof value
  return value !== null && (valueType === 'object' || valueType === 'function')
}

function deepCopy(originValue) {
  // 1.如果是原始类型, 直接返回
  if (!isObject(originValue)) {
    return originValue
  }

  // 2.如果是对象类型, 才需要创建对象
  const newObj = {}
  for (const key in originValue) {
    newObj[key] = deepCopy(originValue[key])
  }
  return newObj
}
