import userImage from "../Images/default.png"
import React, { useState } from "react";
function ContactCard(props) {
    return (
        <React.Fragment>
            <button className="btn form-control mt-1" onClick={()=>{
                props.changeFunction[0](props.userName);
                props.changeFunction[1](props.phone);
                props.changeFunction[2](props.email);
                props.changeFunction[3](props.dob);
            }}>
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3"><img src={userImage}className="rounded-circle" height="50"></img></div>
                            <div className="col-md-9" align="left">{props.userName}</div>
                        </div>
                    </div>
                </div>
            </button>
        </React.Fragment>
    );
}
export default ContactCard;