# setState一定是异步吗?
## React18之前，setTimeOut(原生Dom事件中)中的setState操作是同步操作，在组件生命周期或React合成事件中是异步的
## React18之后，setTimeOut中的setState操作是异步操作(批处理)

## 首先可以显著提升性能：
* 首先重复调用setState情况下会开启一个任务队列，存放所有setState，这种情况下如果每次调用setState都会进行一次更新，而每次更新意味着render()函数的频繁被调用，造成效率低下且性能太低  
* 于是解决办法就是获取多个更新，之后进行批量更新，再进render  
### 同时要注意：如果同步更新了state，但还没有执行render函数，那么state和props不能保持同步