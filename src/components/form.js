import React from "react";
import "./style.css";


function Form(props) {

    return (
        <div>
            <h1>Employee Directory</h1>
            <h3>Enter first name below and click the 'Sort Names' button to view the full list of names!</h3>

            <div class="entertext">
                <form className="form">

                    <input
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Name are case sensitive!"
                    />
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );

}

export default Form;