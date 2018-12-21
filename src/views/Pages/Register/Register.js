import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import fire from '../../../Config/firebase'
class Register extends Component {
  constructor() {
    super()
    this.event_register = this.event_register.bind(this)
    this.create_account = this.create_account.bind(this)
    this.state = {


      emailid: '',
      password: '',
      repassword: '',
      page: 1,
    }

  }
  //   userpr=>{
  //   var dbref=fire.database().ref(`Users/${userpr.user.uid}`)
  //   dbref.set(this.userpackage)

  event_register(e) {
    this.setState({ [e.target.name]: e.target.value })

  }
  create_account() {
    if (this.state.password === this.state.repassword && this.state.password != "") {
      fire.auth().createUserWithEmailAndPassword(this.state.emailid, this.state.password)
        .then(console.log("Acc Created"))
    }
    else {
      console.log("nai chl rhi")
    }

  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {<i className="icon-user"></i> }
                        </InputGroupText>
                      </InputGroupAddon> */}
                      {/* <Input type="text" name="UserName" placeholder="Username" autoComplete="username" onChange={this.event_register} /> */}
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="emailid" placeholder="Email" autoComplete="email" onChange={this.event_register} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="password" placeholder="Password" autoComplete="new-password" onChange={this.event_register} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="repassword" placeholder="Repeat password" autoComplete="new-password" onChange={this.event_register} />
                    </InputGroup>
                    <Button color="success" block onClick={this.create_account}>Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
