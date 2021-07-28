import React, { PureComponent } from 'react';
import styles from './Flights.module.css'
// './App.module.scss';

/**
 * Class flights render flights page with the information needed 
 */
class Flights extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            title: "",
        }
    }

    /**
     * 
     * @param {Object} e
     * handels on input text change and updates calss state with value 
     */
    updateTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    /**
     * 
     * @param {Object} e 
     * @description handels button click event and calls action submitExample in actions file
     */
    example = (e) => {
        e.preventDefault();
    
        this.props.submitExample(this.state.title);
    }

    render() {
        return(
            <div className={styles["container"]}>
                <div>
                    <input onChange={this.updateTitle} type="text" value={this.state.title} />
                    <button onClick={this.example}>
                        Click Here
                    </button>
                </div>
                <div>
                    {
                        this.props.showTitle ?
                            <h3> {this.props.title} </h3>

                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default Flights;