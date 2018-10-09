import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


class Cowork extends Component {
    constructor(props) {
        super(props);



        this.state = {

        };
    }

    render() {

        return (
            <div className="animated fadeIn">


                <Row>
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



            </div>
        );
    }
}

export default Cowork;
