import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class launch extends Component{
    render(){
        return(
            <div>
            <h1>This is my app</h1>
            <Button size="sm" href='/dashboard' className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
            </div>
        )
    
    }          


}

export default launch