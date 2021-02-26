import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target; // Pulls whatever value 'name' and 'value' has in the target event and creates variables.
    this.setState({ [name]: value }); // Uses 'computed property name' to set the key of the setState object. the value is pulled from the input's value property, which points to state. So whenever you type something in the input field, it updates the state with every button pressed.
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
