import React from 'react'
import ReactDom from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux' // provider 使组件层级中的 connect() 方法都能够获得 Redux store, 正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法
import App from 'src/container/app'
import store from 'src/store'

console.log(ReactDom)

ReactDom.render(
  <ReduxProvider store={store}><App /></ReduxProvider>, 
  document.getElementById("app")
)
