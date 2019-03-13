import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handlSubmit = (e) => {
    e.preventDefault()
    debugger
    //finish handle submit
  }

  handleUserNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handlSubmit}>
        <div>
        {console.log(this.state)}

          <label>
            Username
            <input onChange={this.handleUserNameChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
