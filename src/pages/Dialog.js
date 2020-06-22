import React, { Component } from 'react'
import Dialog from '../components/Dialog'

export default class DialogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialog: false
    }
  }

  toggle = () => {
    this.setState({ dialog: !this.state.dialog })
  }

  render() {
    const { dialog } = this.state

    return (
      <div className="border">
        <button onClick={this.toggle}>toggleDialog</button>
        {dialog && (
          <Dialog>
            <h3>Dialog</h3>
          </Dialog>
        )}
      </div>
    )
  }
}
