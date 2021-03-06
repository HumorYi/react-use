import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)

    this.node = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.node)
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }

  render() {
    const { children } = this.props

    return createPortal(<div className="dialog">{children && children}</div>, this.node)
  }
}
