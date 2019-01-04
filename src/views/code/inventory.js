import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Label, Input, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap';
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
                        <Button type="reset" size="sm" color="danger" onClick={props.this.event_cancel_category}><i className="fa fa-ban"></i> Cancel</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    )

}
function AddProductAttributes(props) {
    return (
        <Row>
            <Col xs="12" sm="6">
                <Card>
                    <CardBody>
                        < FormGroup>
                            <Label htmlFor="company">Color</Label>
                            <Input type="text" id="company" name="pname" placeholder="e.g RED" onChange={props.this.event_producttostate} />
                            <Label htmlFor="company">Size</Label>
                            <Input type="text" id="company" name="pname" placeholder="e.g 3.2 cm" onChange={props.this.event_producttostate} />
                        </FormGroup>

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
function AddProductPackaging(props) {
    return (
        <Row>
            <Col xs="12" sm="6">
                <Card>
                    <CardBody>
                        < FormGroup>
                            <Label htmlFor="company">Packaging Material:</Label>
                            <Dropdown isOpen={props.this.state.dropdownOpen[0]} toggle={() => {
                                props.this.toggle(0);
                            }}>
                                <DropdownToggle caret>
                                    Choose One
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem disabled>Packets</DropdownItem>
                                    <DropdownItem>Cottons</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Label htmlFor="company">Packaging Instructions:</Label>
                            <Input type="textarea" id="company" name="pname" placeholder="Pack Product with precautions kindly" onChange={props.this.event_producttostate} />
                        </FormGroup>

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
function AddProductLogistics(props) {
    return (
        <Row>
            <Col xs="12" sm="6">
                <Card>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="company">Barcode System:</Label>
                            <Dropdown isOpen={props.this.state.dropdownOpen[0]} toggle={() => {
                                props.this.toggle(0);
                            }}>
                                <DropdownToggle caret>
                                    Choose One
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem disabled>EAN</DropdownItem>
                                    <DropdownItem>UPC</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>ISBN</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* <Input type="text" id="company" name="pname" placeholder="0.37" onChange={props.this.event_producttostate} /> */}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="vat">Barcode Number:</Label>
                            <Input type="text" id="vat" name="pid" placeholder="412032451678" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="street">Issue Inventory Location</Label>
                            <Dropdown isOpen={props.this.state.dropdownOpen[1]} toggle={() => {
                                props.this.toggle(1);
                            }}>
                                <DropdownToggle caret>
                                    Choose One
                  </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem disabled>EAN</DropdownItem>
                                    <DropdownItem>UPC</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>ISBN</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            {/* <Input type="text" id="street" name="price" placeholder="2.8" onChange={props.this.event_producttostate} /> */}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="street">Receive Inventory Location</Label>
                            <Dropdown isOpen={props.this.state.dropdownOpen[2]} toggle={() => {
                                props.this.toggle(2);
                            }}>
                                <DropdownToggle caret>
                                    Choose One
                  </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem disabled>EAN</DropdownItem>
                                    <DropdownItem>UPC</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>ISBN</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            {/* <Input type="text" id="street" name="price" placeholder="2.8" onChange={props.this.event_producttostate} /> */}
                        </FormGroup>

                        {/* <Input type="text" id="street" name="price" placeholder="2.8" onChange={props.this.event_producttostate} /> */}
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Safety Stock</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="1.2" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Bin Number</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="Number of Storage Bin that holds this product" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Sales Forecast</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="1" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Lead Time</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="2" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
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

function AddProductUrl(props) {
    return (
        <Row>
            <Col xs="12" sm="6">
                <Card>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="company">Product Page Url:</Label>
                            <Input type="text" id="company" name="pname" placeholder="http://www.example.com" onChange={props.this.event_producttostate} />
                        </FormGroup>

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
function AddProductDimensions(props) {
    return (
        <Row>
            <Col xs="12" sm="6" md="12">
                <Card>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="company">Weight(Kg)</Label>
                            <Input type="text" id="company" name="pname" placeholder="0.37" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="vat">Height(cm)</Label>
                            <Input type="text" id="vat" name="pid" placeholder="3.6" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="street">Width(cm)</Label>
                            <Input type="text" id="street" name="price" placeholder="2.8" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Depth(cm)</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="1.2" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
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
function AddProductBasic(props) {
    return (
        <Row>
            <Col xs="12" sm="6" md="12">
                <Card>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="company">Name</Label>
                            <Input type="text" id="company" name="pname" placeholder="Enter your product name" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="vat">Description</Label>
                            <Input type="text" id="vat" name="pid" placeholder="Longer Product Description" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <Label htmlFor="vat">Category</Label>
                        <Dropdown isOpen={props.this.state.dropdownOpen[0]} toggle={() => {
                            props.this.toggle(0);
                        }}>
                            <DropdownToggle caret>
                                Select
                  </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <br />
                        <Row>
                            <Col sm="4" md="2">
                                <Button block color="secondary" onClick={props.this.event_AddCategory}>Add New Category</Button>
                            </Col>
                        </Row>
                        {props.this.state.category === "addnewcat" ? <AddCategory this={props.this} /> :null}


                        <FormGroup>
                            <Label htmlFor="street">Price</Label>
                            <Input type="text" id="street" name="price" placeholder="Enter price of product" onChange={props.this.event_producttostate} />
                        </FormGroup>
                        <FormGroup row className="my-0">
                            <Col xs="8">
                                <FormGroup>
                                    <Label htmlFor="city">Quantity</Label>
                                    <Input type="text" id="city" name="quantity" placeholder="Enter Quantity of your product" onChange={props.this.event_producttostate} />
                                </FormGroup>
                            </Col>
                        </FormGroup>
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

function AddProduct(props) {
    return (
        <Row>
            <Col xs="12" sm="6" md="12">
                <Card>

                    <CardHeader>
                        <h5><i className="fa fa-align-justify"></i> <strong>Add New Product</strong></h5>
                    </CardHeader>
                    <CardBody>
                        <Nav tabs>
                            <NavItem>
                                <NavLink href="#" active onClick={props.this.event_Addproductbasic} >Basic</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={props.this.event_AddproductDimensions}>Dimensions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={props.this.event_Addproducturl}>URL</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={props.this.event_Addproductlogistics}>Logistics</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={props.this.event_Addproductpackaging}>Packaging</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={props.this.event_Addproductattributes}>Attributes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">Disabled Link</NavLink>
                            </NavItem>
                        </Nav>

                        {props.this.state.proview === "addproductbasic" ? <AddProductBasic this={props.this} /> :
                            props.this.state.proview === "addproductdimensions" ? <AddProductDimensions this={props.this} /> :
                                props.this.state.proview === "addproducturl" ? <AddProductUrl this={props.this} /> :
                                    props.this.state.proview === "addproductlogistics" ? <AddProductLogistics this={props.this} /> :
                                        props.this.state.proview === "addproductpackaging" ? <AddProductPackaging this={props.this} /> :
                                            props.this.state.proview === "addproductattributes" ? <AddProductAttributes this={props.this} /> : null}
                                            
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )

}


class Inventory extends Component {
    constructor(props) {
        super()
        this.state = {
            category: "",
            pview: "home",
            proview: "addproductbasic",
            dropdownOpen: new Array(6).fill(false),
            product: {
                pname: "",
                pid: "",
                price: "",
                quantity: ""

            }

        };
        this.event_Readtextbox = this.event_Readtextbox.bind(this)
        this.event_submit = this.event_submit.bind(this)
        this.event_AddCategory = this.event_AddCategory.bind(this)
        this.event_AddItom = this.event_AddItom.bind(this)
        this.toggle = this.toggle.bind(this)
        this.event_productsubmit = this.event_productsubmit.bind(this)
        this.event_producttostate = this.event_producttostate.bind(this)
        this.event_Addproductbasic = this.event_Addproductbasic.bind(this)
        this.event_AddproductDimensions = this.event_AddproductDimensions.bind(this)
        this.event_Addproducturl = this.event_Addproducturl.bind(this)
        this.event_Addproductlogistics = this.event_Addproductlogistics.bind(this)
        this.event_Addproductpackaging = this.event_Addproductpackaging.bind(this)
        this.event_Addproductattributes = this.event_Addproductattributes.bind(this)
        this.event_cancel_category=this.event_cancel_category.bind(this)
    }
    event_cancel_category(e){
        this.setState({ category: "lol" })
    }
    event_Readtextbox(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    event_submit(e) {
        var dbref = fire.database().ref(`Data/${fire.auth().currentUser.uid}/categories/${this.state.category}`)
        dbref.set(true)
    }
    event_AddCategory(e) {
        this.setState({ category: "addnewcat" })
    }
    event_AddItom(e) {
        this.setState({ pview: "product" })
    }
    event_Addproductbasic(e) {
        this.setState({ proview: "addproductbasic" })
    }
    event_AddproductDimensions(e) {
        this.setState({ proview: "addproductdimensions" })
    }
    event_Addproducturl(e) {
        this.setState({ proview: "addproducturl" })
    }
    event_Addproductlogistics(e) {
        this.setState({ proview: "addproductlogistics" })
    }
    event_Addproductpackaging(e) {
        this.setState({ proview: "addproductpackaging" })
    }
    event_Addproductattributes() {
        this.setState({ proview: "addproductattributes" })
    }
    event_productsubmit(e) {
        var dbref = fire.database().ref(`Data/${fire.auth().currentUser.uid}/products/`)
        var key = dbref.push().getKey()
        dbref.child(key).set(this.state.product)
    }
    event_producttostate(e) {
        let temp = Object.assign({}, this.state.product)
        temp[e.target.name] = e.target.value
        this.setState({ product: temp })

    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }
    toggle_issue_inventory(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
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
                            {/* <Col md="2">
                                <Button active block color="primary" aria-pressed="true" onClick={this.event_AddCategory}>Add Category</Button>
                            </Col> */}
                            <Col md="2">
                                <Button active block color="primary" aria-pressed="true" onClick={this.event_AddItom}>Add Product</Button>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                                {this.state.view === "addcat" ? <AddCategory this={this} /> : null}

                            </Col>
                        </Row> */}



                    </CardBody>
                </Card>
                <Card>
                    <Row>
                        <Col>
                            {this.state.pview === 'product' ? <AddProduct this={this} /> : null}



                        </Col>
                    </Row>
                </Card>

            </div>

        );
    }
}

export default Inventory;
