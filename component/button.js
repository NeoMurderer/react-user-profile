import React from 'react'

class Button extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Update name</button>
    }
}
module.exports = Button