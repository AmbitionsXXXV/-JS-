# Vue 的 render 函数, h()函数/createVNode()函数

## 首先需要明白 VNode 和 VDOM 的概念

- Vue 在生成真实的 DOM 之前,会将我们的节点转换成 VNode,而 VNode 组合在一起形成一个树结构,就是虚拟 DOM(VDOM)
- 在<template></template>中编写的 HTML 最终也是通过 Render 函数生成对应的 VNode
- 所以在一些特定时候,需要自己灵活定制时,可以像 React 一样自己来编写 createVNode 函数,生成对应的 VNode

## h()函数

```js
/**
 * @params
 * tag: {string | Object | Function} 一个HTML标签名,一个组件,一个异步组件或一个函数式组件(必传)
 * attr: {Object} 与attribute,prop和事件相对应的对象(可选)
 * children:{string | Array | Object} 子VNodes,使用'h()'构建或使用字符串获取'文本VNode'或者有插槽的对象(可选)
 */
h(tag, attr, children)
```
