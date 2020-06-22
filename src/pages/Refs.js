import React, { Component, useRef } from 'react'

export default class RefPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.nameInputRef = React.createRef()
    this.passwordInputRef = React.createRef()
    this.ageInputRef = React.createRef()
    this.countryInputRef = React.createRef()
  }

  submit = e => {
    console.log(this.nameInputRef.current.value)
    // dom 节点
    const name = this.nameInputRef.current.value
    // class 组件，获取组件实例
    const password = this.passwordInputRef.current.getPassword()
    // function 组件，获取组件实例
    const age = this.ageInputRef.current.value
    const country = this.countryInputRef.current.value
    console.log('name:', name, password, age, country)
  }

  render() {
    // ref 只能用于 class 组件
    // function 组件 需要借助 React.forwardRef(Comp) 生成一个新组件，在新组件上使用 ref ，实现 ref 转发给函数组件
    const AgeWithRef = React.forwardRef(AgeInput)
    const HocCountry = hoc(Country)
    const { count } = this.state

    return (
      <div>
        <h3>RefPage</h3>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click change count {count}</button>

        <div className="border">
          <label htmlFor="username">用户名：</label>
          <input type="text" id="username" ref={this.nameInputRef} />
        </div>

        <PasswordInput ref={this.passwordInputRef} />
        <AgeWithRef ref={this.ageInputRef} />
        <BirthInput />
        <CityInput />
        <HocCountry ref={this.countryInputRef} />

        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

class PasswordInput extends Component {
  constructor(props) {
    super(props)
    this.passwordInputRef = React.createRef()
  }

  getPassword = () => this.passwordInputRef.current.value

  render() {
    return (
      <div className="border">
        <label htmlFor="password">密码：</label>
        <input type="text" id="password" ref={this.passwordInputRef} />
      </div>
    )
  }
}

function AgeInput(props, ref) {
  return (
    <div className="border">
      <label htmlFor="age">年龄：</label>
      <input type="text" id="age" ref={ref} />
    </div>
  )
}

class BirthInput extends Component {
  constructor(props) {
    super(props)
    this.birthInput = null
  }

  // callback
  setTextInputRef = ele => {
    // 只在初始化时渲染执行
    console.log('setTextInputRef outer function', ele)
    this.birthInput = ele
  }

  componentDidMount() {
    // React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null
    // 在 componentDidMount 或 componentDidUpdate 触发前， React 会包装 refs 一定是最新的
    this.birthInput.value = '123'
    this.birthInput.focus()
  }

  render() {
    return (
      <div className="border">
        <label htmlFor="birth">生日：</label>
        <input type="text" id="birth" ref={this.setTextInputRef} />
        {/* ref 回调以内联函数定义时，更新阶段执行两次 */}
        {/* <input
          type="text"
          id="birth"
          ref={ele => {
            console.log('setTextInputRef inner function', ele)
            this.birthInput = ele
          }}
        /> */}
        <button
          onClick={() => {
            console.log('birth', this.birthInput.value)
          }}
        >
          click
        </button>
      </div>
    )
  }
}

// hooks useRef
function CityInput(props) {
  const cityInputRef = useRef(null)

  return (
    <div className="border">
      <label htmlFor="city">城市：</label>
      <input type="text" id="city" ref={cityInputRef} />

      <button
        onClick={() => {
          console.log('city', cityInputRef.current.value)
        }}
      >
        click
      </button>
    </div>
  )
}

// hoc 中转发 ref
const hoc = WrapComponent =>
  React.forwardRef((props, ref) => {
    return (
      <div className="border">
        <WrapComponent {...props} countryInputRef={ref} />
      </div>
    )
  })

function Country({ countryInputRef }) {
  return (
    <div className="border">
      <label htmlFor="country">国家：</label>
      <input type="text" id="country" ref={countryInputRef} />
    </div>
  )
}
