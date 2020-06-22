import React, { PureComponent } from 'react'

/**
 * 原理：定制了shouldComponentUpdate后的Component
 * 优点：当 props 和 state 没有发生更新时，可以避免不必要的 render，提升性能
 * 缺点：必须要用class形式，而且要注意是浅比较
 *
 * Vs Component：Component 未实现 shouldComponentUpdate()，
 *  PureComponent 以浅层对比 props 和 state 的方式实现该函数
 *
 * 注意
 *  React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。
 * 如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
 * 仅在你的 props 和 state 较为简单时，才使用 React.PureComponent ，
 * 或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
 * 你也可以考虑使用 immutable 对象加速嵌套 数据的比较。
 * 此外， React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。
 * 因此，请确保所有⼦组件也都是“纯”的组件
 */
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      obj: {
        num: 2
      }
    }
  }

  setCounter = () => {
    this.setState({
      counter: 100
      // obj: {
      //   num: 200
      // }
    })
  }

  render() {
    const { counter, obj } = this.state
    console.log('render')

    return (
      <div>
        <h3>PureComponent</h3>
        <p>{obj.num}</p>
        <button onClick={this.setCounter}>counter: {counter}</button>
      </div>
    )
  }
}
