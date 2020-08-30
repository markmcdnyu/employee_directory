import React from "react";
import "./style.css";


function Form(props) {

    return (
        <div>
            <h1>Employee Directory</h1>
            <h3>Enter a first name below and click 'Submit'</h3>
            <h3>Or Enter click the 'Sort Names' button to sort</h3>

            <div class="entertext">
                <form className="form">

                    <input
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Names are case sensitive!"
                    />
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );

}

export default Form;