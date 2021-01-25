import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {}

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI
        .loginUser({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
        })
        .then((res) => {
          if (res.status === 200) {
            this.props.setUserState(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="6">
            <form>
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                type="password"
              />

              <button
                className="cta"
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </button>
              <Link to="/signup">
                <button className="cta"> Signup </button>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
