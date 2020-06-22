import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// 导致代码被渲染两次，问题暂不知
// <React.StrictMode><App /></React.StrictMode>,

ReactDOM.render(<App />, document.getElementById('root'))
