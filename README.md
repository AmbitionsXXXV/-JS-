# 简单总结手写 Promise

## 一. Promise 规范

<https://promisesaplus.com/>

## 二. Promise 类设计

```js
class EtcPromise {}
```

```js
function EtcPromise() {}
```

## 三. 构造函数的规划

```js
class EtcPromise {
  constructor(executor) {
    // 定义状态
    // 定义resolve、reject回调
    // resolve执行微任务队列：改变状态、获取value、then传入执行成功回调
    // reject执行微任务队列：改变状态、获取reason、then传入执行失败回调

    // try catch
    executor(resolve, reject)
  }
}
```

## 四. then 方法的实现

```js
class EtcPromise {
  then(onFulfilled, onRejected) {
    // this.onFulfilled = onFulfilled
    // this.onRejected = onRejected
    // 1.判断onFulfilled、onRejected，会给默认值
    // 2.返回Promise resolve/reject
    // 3.判断之前的promise状态是否确定
    // onFulfilled/onRejected直接执行（捕获异常）
    // 4.添加到数组中push(() => { 执行 onFulfilled/onRejected 直接执行代码})
  }
}
```

## 五. catch 方法

```js
class EtcPromise {
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
}
```

## 六. finally

```js
class EtcPromise {
  finally(onFinally) {
    return this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }
}
```

## 七. resolve/reject

## 八. all/allSettled

核心：要知道 new Promise 的 resolve、reject 在什么情况下执行

all：

- 情况一：所有的都有结果
- 情况二：有一个 reject

allSettled：

- 情况：所有都有结果，并且一定执行 resolve

## 九.race/any

race:

- 情况：只要有结果

any:

- 情况一：必须等到一个 resolve 结果
- 情况二：都没有 resolve，所有的都是 reject
