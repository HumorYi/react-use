import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../Context'

// 函数式组件
export default function User(props) {
  // useContext() 函数式组件专用
  const {themeColor} = useContext(ThemeContext)
  const {name} = useContext(UserContext)

  return (
    <div className="border">
      <h3 className={themeColor}>User: {name}</h3>
    </div>
  )
}
