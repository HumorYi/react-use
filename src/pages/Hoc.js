import React, { Component } from 'react'

// hoc 是个函数，参数为组件，返回值是组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  )
}

const Child = props => {
  return <div className="border">Child-{props.name}</div>
}

// 基本使用
const Foo = foo(Child)
// 链式调用
const Foo2 = foo(foo(Child))

@foo
class ClassChild extends Component {
  render() {
    return <div className="border">child-{this.props.name}</div>
  }
}

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <h3>Hoc</h3>
        <Foo name="hoc-function-child" />
        <Foo2 name="hoc-function-child-chain" />
        <ClassChild name="hoc-class-child" />
      </div>
    )
  }
}
