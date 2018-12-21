import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import fire from '../../Config/firebase'
// Styles
// CoreUI Icons Set

// import { renderRoutes } from 'react-router-config';
function AddCategory(props) {
    return (
        <Row>
            <Col xs="12" sm="6">
                <Card>
                    <CardHeader>
                        <strong>Add Category</strong>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>

                                    <Input type="text" name="category" id="name" placeholder="Enter Category Name" required onChange={props.this.event_Readtextbox} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit" size="sm" color="primary" onClick={props.this.event_submit}><i className="fa fa-dot-circle-o"></i> Save</Button>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Cancel</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    )

}

class Inventory extends Component {
    constructor(props) {
        super()
        this.state = {
            category: ""

        };
        this.event_Readtextbox = this.event_Readtextbox.bind(this) 
        this.event_submit = this.event_submit.bind(this)    
    }
    event_Readtextbox(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      event_submit(e) {
        var dbref=fire.database().ref(`Data/${fire.auth().currentUser.uid}/categories/${this.state.category}`)
        dbref.set(true)
      }
    
    componentDidMount() {


    }
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>

                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="8">
                                <h2>Inventory</h2>
                            </Col>
                            <Col md="2">
                                <Button active block color="primary" aria-pressed="true">Add Category</Button>
                            </Col>
                            <Col md="2">
                                <Button active block color="primary" aria-pressed="true">Add Product</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AddCategory this={this} />
                            </Col>
                        </Row>


                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default Inventory;
