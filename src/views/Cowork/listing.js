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


function Contactdetails(props) {
    return (
        <div>
            <Row>
                <Col>

                    <CardHeader>
                        <h4> How Will People Contact You?</h4>
                        
                    </CardHeader>



                    <Card>
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                <h5 >Official Contact Details</h5>
                                    <FormGroup>
                                        <Label htmlFor="name">Email</Label>
                                        <Input type="text" name="Wsname" placeholder="Enter your Email" required onChange={props.this.event_description_pg} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label >Telephone</Label>

                                        <Input type="text" name="Description" placeholder="Enter Your Telephone Number" required onChange={props.this.event_description_pg} />

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label >Website Url</Label>

                                        <Input type="text" name="Description" placeholder="Enter Your Website Url" required onChange={props.this.event_description_pg} />

                                    </FormGroup>
                                </Col>
                                <Col xs="12">
                                <h5 >Social Media</h5>
                                    <FormGroup>
                                        <Label htmlFor="name">Facebook</Label>
                                        <Input type="text" name="Wsname" placeholder="e.g facebook.com/coworker" required onChange={props.this.event_description_pg} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label >Twitter</Label>

                                        <Input type="text" name="Description" placeholder="e.g twitter.com/cowerker" required onChange={props.this.event_description_pg} />

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label >Instagram</Label>

                                        <Input type="text" name="Description" placeholder="e.g instagram.com/coworker" required onChange={props.this.event_description_pg} />

                                    </FormGroup>
                                </Col>
                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary" onClick={props.this.event_description_save}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            {/* <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button> */}
                        </CardFooter>
                    </Card>

                </Col>
            </Row>







        </div>
    )
}


function Description(props) {
    return (
        <div>


            <Row>
                <Col >

                    <CardHeader>
                        <h5>Tell Coworkers About Your Space</h5>
                    </CardHeader>



                    <Card>
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="name">WorkSpace Name</Label>

                                        <Input type="text" name="Wsname" placeholder="Enter your WorkSpace name" required onChange={props.this.event_description_pg} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label >Description</Label>

                                        <Input type="textarea" name="Description" placeholder="Details of your Space" required onChange={props.this.event_description_pg} />

                                    </FormGroup>
                                </Col>
                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary" onClick={props.this.event_description_save}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            {/* <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button> */}
                        </CardFooter>
                    </Card>

                </Col>
            </Row>







        </div>
    )
}
function New_listing(props) {
    if (props.this.state.page === 1) {
        return (<Description this={props.this} />)
    }
    else if (props.this.state.page === 2) {
        return (<Contactdetails this={props.this} />)
    }
    else {
        return (<div>

        </div>)

    }

    // else if(props.this.state.page===3)
    // {
    //   return(<Contact/>)
    // }
    // else if(props.this.state.page===4)
    // {
    //   return(<Login/>)
    // }

}

class Listings extends Component {
    constructor(props) {
        super()
        this.event_description = this.event_description.bind(this)
        this.event_description_pg = this.event_description_pg.bind(this)
        this.event_description_save = this.event_description_save.bind(this)
        this.event_contactdetails = this.event_contactdetails.bind(this)
        

        this.state = {
            Wsname: '',
            Description: '',
            page: 0
        };
        this.userpackage = {
            Wsname: '',
            Description: ''
        }

    }

    event_description(e) {
        this.setState({ page: 1 })
    }
    event_description_pg(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    event_description_save() {
        this.userpackage.Wsname = this.state.Wsname
        this.userpackage.Description = this.state.Description
        var dbref = fire.database().ref(`Users/${localStorage.getItem('user')}/Description`)
        dbref.update(this.userpackage)
    }
    event_contactdetails(e) {
        console.log("event is running bro")
        this.setState({ page: 2 })
    }

    render() {

        return (
            <div>

                <Row>
                    <Col md="3">
                        <Card>
                            <CardHeader>
                                <strong>List your Space</strong>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">




                                    <FormGroup row>
                                        <Col >
                                            <Button color="secondary" size="md" block onClick={this.event_description}>Description </Button>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Col >
                                            <Button color="secondary" size="md" block onClick={this.event_contactdetails}>Contact Details</Button>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Amenties</Button>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Location</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Opening Hours</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Size</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Photos</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Payment Methods</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Prices:Desks</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col>
                                            <Button color="secondary" size="md" block>Prices:Private Offices</Button>
                                        </Col>
                                    </FormGroup>













                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" >><i className="fa fa-dot-circle-o" onClick={this.event_description_save}></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col>



                        <New_listing this={this} />






                    </Col>
                </Row>






            </div>
        );
    }
}


export default Listings;
