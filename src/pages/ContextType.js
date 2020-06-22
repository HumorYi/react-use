import React, { Component } from 'react'
import { ThemeContext } from '../Context'

// 类组件
export default class ContextType extends Component {
  // contextType 类组件专用，可在实例中 this.context 拿到数据
  static contextType = ThemeContext

  render() {
    const { themeColor } = this.context
    return (
      <div>
        <h3 className={themeColor}>ContextType</h3>
      </div>
    )
  }
}
