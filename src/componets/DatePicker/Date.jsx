import React, { PureComponent } from 'react';
// import { Modal, Button, Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
//taken from https://github.com/arqex/react-datetime
import DatePicker from 'react-date-picker'
import { useState } from 'react';


class Calendar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
  }

  setStartDate = (date) => {
    console.log(date)
    console.log(typeof(date))
    this.setState({
      startDate: date,
    })
  }

  updateDate = () => {
    this.props.startDate(this.state.startDate)
  }

  render() {
    return (
      <div>
        <DatePicker value={new Date()} onChange={(date) => this.setStartDate(date)} onClose={this.updateDate}></DatePicker>

      </div>
    )
  }

}

export default Calendar;

        /* <DatePicker onChange={this.dateChange}
          value={new Date()}
          returnValue={"start"}></DatePicker> */

function MyApp() {
  const [value, onChange] = useState(new Date());

  // const updateDate = (e) => {(
  //     // value = e.target.value
  //     console.log("hi")
  //     // onChange()
  // )}

  return (
    <div>
      <DatePicker
        onChange={(value) => alert(value)}
        value={value}
        returnValue={"start"}
      />
    </div>
  );
}

  // export default MyApp;

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





// import React from "react";
// import "react-datetime/css/react-datetime.css";
// import Datetime from "react-datetime";

// export default function App() {
//   return <MyDTPicker />;
// }

// class MyDTPicker extends React.Component {
//   render() {
//     return (
//       <Datetime
//         renderDay={this.renderDay}
//         renderMonth={this.renderMonth}
//         renderYear={this.renderYear}
//       />
//     );
//   }
//   renderDay(props, currentDate, selectedDate) {
//     // Adds 0 to the days in the days view
//     return <td {...props}>{"0" + currentDate.date()}</td>;
//   }
//   renderMonth(props, month, year, selectedDate) {
//     // Display the month index in the months view
//     return <td {...props}>{month}</td>;
//   }
//   renderYear(props, year, selectedDate) {
//     // Just display the last 2 digits of the year in the years view
//     return <td {...props}>{year % 100}</td>;
//   }
// }
