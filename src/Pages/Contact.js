import React, { useState } from "react";
import ContactCard from "../Components/ContactCard";
import userImage from "../Images/default.png"
function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    return (
        <React.Fragment>
            <div className="container mt-4 fix-display-out">
                <div className="row">
                    {/* chat View */}
                    <div className="col-md-4  fix-display">
                        <button className="btn btn-outline-dark form-control btn-md">
                            <i class="fa-solid fa-plus"></i> &nbsp;
                            Add Contacts
                        </button>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                        <ContactCard name="Test"></ContactCard>
                    </div>
                    {/* profile View */}
                    <div className="col-md-8">
                        <center><img src={userImage} className="rounded-circle mt-1" height="150"></img></center>
                        <div className="row align-items-center">
                            <div className="col-md-12 ">
                                {renderContactDetails(name, phone, email, dob)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
function renderContactDetails(name, phone, email, dob) {
    if (name === "") {
        return (
            <React.Fragment>
                <div className="alert alert-warning mt-4">
                    Select Contact to view Details
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="card  mt-4 ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">Name</div>
                            <div className="col-md-9">{name}</div>
                        </div><hr></hr>
                        <div className="row">
                            <div className="col-md-3">Phone</div>
                            <div className="col-md-9">{phone}</div>
                        </div><hr></hr>
                        <div className="row">
                            <div className="col-md-3">E-Mail</div>
                            <div className="col-md-9">{email}</div>
                        </div><hr></hr>
                        <div className="row">
                            <div className="col-md-3">Birth Of Date</div>
                            <div className="col-md-9">{dob}</div>
                        </div><hr></hr>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-success form-control mt-2 "><i class="fa-solid fa-phone"></i></button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-warning form-control mt-2 "><i class="fa-solid fa-user-pen"></i></button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-danger form-control mt-2 "><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;