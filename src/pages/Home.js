import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Contact from './Contact';


const Home = () => {

    const [data, setData] = useState({
        name:"aashish",
    });
    const [showpopup, setShowpopup] = useState(false)
    const [profile, setprofile] = useState('');
    const [valid, setValid] = useState(false);
    const validProfile = /^[A-Za-z]+$/;

    const onSubmitForm = (e) => {
        const test=localStorage.setItem("formData", JSON.stringify(data.name));
    }

    const handlerprofile = (e) => {
        setprofile(e.target.value);
        if (validProfile.test(profile)) {
            console.log("valid");

        } else {
            console.log("not valid");
            <h1>not valid</h1>
        }
    }

    return (
        <>
            <form className="mt-2" onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Employee-Id</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.name} />
                    <div className='testName'></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Employee Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" value="" disabled />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Profile</label>
                    <input type="text" className="form-control" onChange={(e) => handlerprofile(e)} id="exampleInputEmail1" aria-describedby="emailHelp" value={profile} />
                    {/* <input type="text" value={profile} onChange={(e) => handlerprofile(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.profile} /> */}
                </div>
                <button type="submit" className="btn btn-primary align-self-start">Submit</button>

                <Link to="/contact" >next</Link>
            </form>
        </>
    )
}

export default Home