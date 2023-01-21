# Q:setState 一定是异步吗?

## React18 之前，setTimeOut(原生 Dom 事件中)中的 setState 操作是同步操作，在组件生命周期或 React 合成事件中是异步的

## React18 之后，setTimeOut 中的 setState 操作是异步操作(批处理)

## 首先可以显著提升性能

- 首先重复调用 setState 情况下会开启一个任务队列，存放所有 setState，这种情况下如果每次调用 setState 都会进行一次更新，而每次更新意味着 render()函数的频繁被调用，造成效率低下且性能太低
- 于是解决办法就是获取多个更新，之后进行批量更新，再进 render

### 同时要注意：如果同步更新了 state，但还没有执行 render 函数，那么 state 和 props 不能保持同步

## setState 的第一个参数可以是函数可以是对象
