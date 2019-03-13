import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleMessageChange(e)} type="text" name="message" value={this.state.message} />
        <p><strong>Remaining Characters: </strong>{this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
