import userImage from "../Images/default.png"
import React, { useState } from "react";
function ContactCard(props) {
    return (
        <React.Fragment>
            <button className="btn form-control mt-1">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3"><img src={userImage}className="rounded-circle" height="50"></img></div>
                            <div className="col-md-9" align="left">{props.name}</div>
                        </div>
                    </div>
                </div>
            </button>
        </React.Fragment>
    );
}
export default ContactCard;