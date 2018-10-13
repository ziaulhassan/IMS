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
    Nav, NavItem, NavLink
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

function Menu(props) {
    return (
        <div className="About Coworker.pk">

            <button type="submit" onClick={props.this.event_aboutus} > About Us </button>

        </div>
    )
}
function About(props) {
    return (
        <div>
            <h1>About</h1>
            <p>We are providing shared workspaces all over Pakistan at best rates.We
                connects people and coworking spaces in over 20 Major Cities in Pakistan.No matter
                        where you are in Pakistan, we make it
                        easy for you to find a workspace&community you'll love.
            </p>
        </div>
    )
}

class Cowork extends Component {
    constructor(props) {
        super()

        this.event_aboutus = this.event_aboutus.bind(this)

        this.state = {

        };

    }

    event_aboutus(e) {
        console.log('Hi Coworker.pk')
    }

    render() {

        return (
            <div>


                <Menu this={this} />
                <About this={this} />
                <Row md="2">
                    <Col md="3">
                <Nav className="d-md-down-nonee" navbar>
                <NavItem className="px-3">
                    <NavLink href="/">About Us</NavLink>
                </NavItem>
                </Nav>
                </Col>
                </Row>
                {/* <Row background={background}>

                    <Col col="2" sm="4" md="2" className="mb-3 mb-xl-0">
                        <Button block color="warning">Warning</Button>
                    </Col>
                    <Col col="2" sm="4" md="2" className="mb-3 mb-xl-0">
                        <Button block color="success">Success</Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <i className="flag-icon flag-icon-ae h1" title="ae" id="ae"></i>
                        <div>flag-icon-ae</div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Library</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                    </Col>
                </Row>
                <Row>
                    <Col col="2" sm="4" md="4">
                <Card>
                    <CardHeader>
                        Card title
                   </CardHeader>
              <CardBody>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
                </Col>
                </Row> */}


            </div>
        );
    }
}


export default Cowork;
