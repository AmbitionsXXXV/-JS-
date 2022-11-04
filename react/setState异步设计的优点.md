# React18之前 setState一定是异步

## 首先可以显著提升性能：
* 首先重复调用setState情况下会开启一个任务队列，存放所有setState，这种情况下如果每次调用setState都会进行一次更新，而每次更新意味着render()函数的频繁被调用，造成效率低下且性能太低  
* 于是解决办法就是获取多个更新，之后进行批量更新，再进render  
### 同时要注意：如果同步更新了state，但还没有执行render函数，那么state和props不能保持同步