import React, { Component } from 'react';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Bar, Line } from 'react-chartjs-2';
import background from './cover.jpg';
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

        this.state = {

        };

    }

    render() {

        return (
            <div>

                <Row>
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


                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong>Horizontal</strong> Form
              </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">



                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-email">Email</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
                                            <FormText className="help-block">Please enter your email</FormText>
                                        </Col>
                                    </FormGroup>

                                




                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-password">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password" />
                                            <FormText className="help-block">Please enter your password</FormText>
                                        </Col>
                                    </FormGroup>




                                    
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
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
