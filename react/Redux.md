# Redux

## Redux的三大基本原则

- 单一数据源
  - 整个应用的`state`都被存储在一个`object tree`中，且这个tree 只存储一个`store`
  - `Redux`并没有强制让我们只能创建一个`store`，只是多个`store`不利于数据的维护  
  - 单一的数据源可以让整个应用程序的`state`变得方便维护、追踪以及修改

- State是只读的
  - 唯一可以修改State的方法一定是出发`action`，不能在任何位置用任何方式修改`State`
  - 这一特性确保了View或网络请求都不能直接修改`state`，而只能通过`action`来描述预计怎么修改`state`
  - 保证所有的修改都被集中化处理，并且按照严格的顺序执行，从而不用担心`race condition`的问题

- 使用纯函数来执行修改
  - 通过`reducer`将旧`state`和`actions`联系在一起，并返回一个新的`State`
  - 所有的`reducer`都应该是纯函数，不能产生任何的副作用

## Redux创建store后的文件结构划分

- @/store/index.js
- @/store/reducer.js
- @/store/actionCreators.js
  - 用于创建发起action的函数
- @/store/constants.js  
  - 用于定义action的type常量
