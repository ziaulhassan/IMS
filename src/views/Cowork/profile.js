import React, { Component } from 'react';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Bar, Line } from 'react-chartjs-2';
import background from './cover.jpg';
import fire from '../../Config/firebase'
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    Breadcrumb,
    BreadcrumbItem,
    Nav, NavItem, NavLink,
    Form,
    FormGroup,
    Label,
    Input, FormText,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

class Profile extends Component {
    constructor(props) {
        super()
        this.event_profile = this.event_profile.bind(this)
        this.submit_profile= this.submit_profile.bind(this)

        this.state = {
            Name: '',
            Contact: '',
            Address: '',
            Homecity: ''

        };
        this.userpackage = {

            Name: '',
            Contact: '',
            Address: '',
            Homecity: ''

        }

    }

    event_profile(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    submit_profile(){
        this.userpackage.Name=this.state.Name
        this.userpackage.Contact=this.state.Contact
        this.userpackage.Address=this.state.Address
        this.userpackage.Homecity=this.state.Homecity

        var dbref=fire.database().ref(`Users/${localStorage.getItem('user')}/About`)
        dbref.update(this.userpackage)
    }

    render() {

        return (
            <div>

                {/* <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h1>This is Profile Section</h1>
                            </CardHeader>
                            <CardBody>
                                <p>Please Enter Your Profile Info</p>

                            </CardBody>

                        </Card>

                    </Col>


                </Row> */}
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong>User Profile</strong>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-email">Name</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="name"  id="hf-name" name="Name" placeholder="Enter Name..." autoComplete="name" onChange={this.event_profile} />
                                            <FormText className="help-block">Please enter your Name</FormText>
                                        </Col>
                                    </FormGroup>






                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-contact number">Contact Number</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="contact number"  id="hf-contact number" name="Contact" placeholder="Enter Contact Number..." autoComplete="contact number" onChange={this.event_profile} />
                                            <FormText className="help-block">Please enter your Contact Number</FormText>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-address">Address</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="Address" id="hf-address" name="Address" placeholder="Enter Address..." autoComplete="address" onChange={this.event_profile} />
                                            <FormText className="help-block">Please enter your Address</FormText>
                                        </Col>
                                    </FormGroup>



                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-home city">Home City</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="home city" id="hf-home city" name="Homecity"  placeholder="Enter Home City..." autoComplete="home city" onChange={this.event_profile} />
                                            <FormText className="help-block">Please enter your Home City</FormText>
                                        </Col>
                                    </FormGroup>





                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" onClick={this.submit_profile}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>




            </div>
        );
    }
}


export default Profile;
