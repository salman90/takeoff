// import React from 'react';
// // import { Modal, Button, Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import "react-datetime/css/react-datetime.css";
// import Datetime from "react-datetime";
// import moment from "moment";
// //taken from https://github.com/arqex/react-datetime


// let inputProps = {
//     placeholder: 'Pick your Earliest Start Date',
//     // onMouseLeave: () => alert('You went to the input but it was disabled')
// };

// let yesterday = moment().subtract(1, "day");
// function valid(current) {
//   return current.isAfter(yesterday);
// }

// //adding timeformat={false} removes the "time" of the day from the selected input
// export default function Date() {
//   return <Datetime timeFormat={false} inputProps={inputProps} isValidDate={valid} />;
// }

import {React, PureComponent} from 'react';
import DatePicker from 'react-date-picker';

// function Date() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <DatePicker
//         onChange={onChange}
//         value={value}
//       />
//     </div>
//   );
// }

class DatePicker extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    updateDate = (e) => {
        this.setState({
            date: e.target.value
        })

    }

    render() {
        return(
            <DatePicker onChange={this.updateDate} />

        )
    }
}

export default Date;

