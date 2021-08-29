import React, { PureComponent } from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
// import Calendar from '../DatePicker';
// import DatePicker from 'react-date-picker'


//a class to handle the user's flights search in put parameters.
class FligthsInput extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            maxPrice: 500,
            passport: "",
            startDate: "",
            endDate: "",
            currentCity: "",
        }
        // this.initialState = this.state
    }


    // this bit needs to have auto-completed added to it.
    passport = (e) => {
        this.setState({
            passport: e.target.value,
        })
    }

    currentCity = (e) => {
        this.setState({
            currentCity: e.target.value,
        })
    }

    maxPrice = (e) => {
        this.setState({
            maxPrice: e.target.value,
        })
    }

    startDate = (e) => {
        this.setState({
            startDate: e,
        })
    }
    endDate = (e) => {
        this.setState({
            endDate: e.target.value,
        })
    }

    gatherData = (e) => {
        console.log(this.state)
        this.props.flightSearch(this.state.maxPrice, this.state.passport, this.state.startDate, this.state.endDate, this.state.currentCity);
        this.setState({
            maxPrice: "",
            passport: "",
            startDate: "",
            endDate: "",
            currentCity: "",
        })
    }

    render() {
        return (<>
            <h2>Let's find you a flight!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Passport</Form.Label>
                    <Form.Control type="text" onChange={this.passport} placeholder="Passport" value={this.state.passport} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" onChange={this.currentCity} placeholder="City of Origin" value={this.state.currentCity} />
                </Form.Group>
                <Form.Label>Budget</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" onChange={this.maxPrice} placeholder="Max Budget" value={this.state.maxPrice} />
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Label>Earliest Departure Date</Form.Label>
                {/* <DatePicker value={new Date} onChange={(value) => this.startDate(value)}/> */}
                <Button variant="primary" onClick={() => { this.gatherData() }}>Submit</Button>
            </Form>


        </>)
    }

}

export default FligthsInput;



/* <div className="dropdown">
<Dropdown>
    <Dropdown.Toggle
        variant="secondary btn-sm"
        id="dropdown-basic">
        Language
    </Dropdown.Toggle>

    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
        <Dropdown.Item href="#" >Arabic</Dropdown.Item>
        <Dropdown.Item href="#">English</Dropdown.Item>
        {/* {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Dropdown.Item href="#">{blog}</Dropdown.Item>
                {console.log(this.props)}
            </div>

        ))} */
//     </Dropdown.Menu>
// </Dropdown>
// </div> */}
    // clearFields = (e) => {
    //     // this.setState(this.initialState)
    //     // console.log("it should clear")
    //     // console.log(this.state.currentCity)
    //     // // this.state.value = "";
    //     // // e.target.reset();
    //     // // this.setState(()=> this.state)
    //     this.setState({
    //         maxPrice: "",
    //         passport: "",
    //         startDate: "",
    //         endDate: "",
    //         currentCity: "",
    //     })
    // }