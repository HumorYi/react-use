import React, { Component } from 'react'

// setState只有在合成事件和生命周期函数中是异步的，
// 在原生事件和setTimeout中都是同步的，这里的异步其实是批量更新

export default class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    // 错误示范，不能直接赋值，只能通过条用 setState 方法进行赋值
    // this.state.counter = 10

    // this.changeValue(1)
    // this.changeValue(2)
    // this.changeValue(3)

    document.getElementById('test').addEventListener('click', this.setCounter)
  }

  changeValue = v => {
    // this.setState(
    //   {
    //     counter: this.state.counter + v
    //   },
    //   () => {
    //     //callback就是state更新完成之后再执行
    //     console.log('counter', this.state.counter)
    //   }
    // )

    this.setState(state => {
      return {
        counter: state.counter + v
      }
    })
  }

  setCounter = () => {
    // 出于性能考虑，React 可能会把多个 setState() 调用合并成⼀个调用
    // 后面的覆盖前面的进行更新
    // 后面的和前面的合并更新
    this.changeValue(1)
    this.changeValue(2)
    this.changeValue(3)

    // 会把多个 setState() 挨个调用
    /* setTimeout(() => {
      this.changeValue(1)
      this.changeValue(2)
      this.changeValue(3)
    }, 0) */
  }

  render() {
    return (
      <div>
        <h3>State</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="test">原生事件*{this.state.counter}</button>
      </div>
    )
  }
}
