import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
// import fire from './Config/firebase'

// import { renderRoutes } from 'react-router-config';

class zia extends Component {
    constructor(props) {
        super()

        this.event_aboutus = this.event_aboutus.bind(this)
        //this.toggle = this.toggle.bind(this);

        this.state = {

        };

    }

    componentDidMount() {


    }
    render() {
        return (
            <div>
                <Card>
                    <Cardheader>

                    </Cardheader>
                    <Cardbody>

                    </Cardbody>
                </Card>
            </div>

        );
    }
}

export default zia;
