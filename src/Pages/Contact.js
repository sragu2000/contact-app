import React, { useEffect, useState } from "react";
import ContactCard from "../Components/ContactCard";
import userImage from "../Images/default.png"
function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    // https://jsonplaceholder.typicode.com/users
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET', mode: 'cors', cache: 'no-cache' })
            .then(response => {
                if (response.status == 200) { return response.json(); }
                else { console.log('Backend Error..!'); console.log(response.text()); }
            })
            .then(data => {
                setJsonData(data);
            })
            .catch(() => { console.log("Network connection error"); });
    }, [])
    return (
        <React.Fragment>
            <div className="container mt-4 fix-display-out">
                <div className="row">
                    {/* chat View */}
                    <div className="col-md-4  fix-display">
                        {
                            jsonData.map((val) => {
                                return (
                                    <ContactCard
                                        key={val.phone}
                                        userName={val.name}
                                        email={val.email}
                                        phone={val.phone}
                                        dob="N/A"
                                        changeFunction={[setName,setPhone,setEmail,setDob]}
                                    >
                                    </ContactCard>);
                            })
                        }
                    </div>
                    {/* profile View */}
                    <div className="col-md-8 fixed-right">
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
                                <a href={"tel:"+phone} className="btn btn-success form-control mt-2 "><i class="fa-solid fa-phone"></i></a>
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


function printList(jsonData) {
    return (
        jsonData.map((val) => {
            return (<Contact userName={val.name}></Contact>);
        })
    );

}
export default Contact;