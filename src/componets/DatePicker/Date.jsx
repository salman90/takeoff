import React from 'react';
// import { Modal, Button, Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
//taken from https://github.com/arqex/react-datetime


let inputProps = {
    placeholder: 'Pick your Earliest Start Date',
    // onMouseLeave: () => alert('You went to the input but it was disabled')
};

let yesterday = moment().subtract(1, "day");
function valid(current) {
  return current.isAfter(yesterday);
}

//adding timeformat={false} removes the "time" of the day from the selected input
export default function Date() {
  return <Datetime timeFormat={false} inputProps={inputProps} isValidDate={valid} />;
}