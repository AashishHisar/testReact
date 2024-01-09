import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [formData, setFormData] = useState('');
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    emailName: false
  });
  const validNameRegix = /^[a-zA-Z]+$/;

  const formSubmit = (e) => {
    console.log(formData);
  }
  const handleChange = (e) => {

    console.log(e.target.value.length);
    const attrName = e.target.name;

    switch (attrName) {
      case "firstName":
        if (e.target.name == "firstName") {
          if (validNameRegix.test(e.target.value)) {
            setError((prev) => ({ ...prev, firstName: true }));
          } else {
            setError((prev) => ({ ...prev, firstName: false }));
          }
        }
        break;
      case "lastName":
        if (e.target.name == "lastName") {
          if (validNameRegix.test(e.target.value)) {
            setError((prev) => ({ ...prev, lastName: true }));
          } else {
            setError((prev) => ({ ...prev, lastName: false }));
          }
        }
        break;
      case "emailName":
        if (e.target.name == "emailName") {
          if (validNameRegix.test(e.target.value)) {
            setError((prev) => ({ ...prev, emailName: true }));
          } else {
            setError((prev) => ({ ...prev, emailName: false }));
          }
        }
        break;
    }
  }

  return (
    <>
      <h3>"For Validation Component form"</h3>
      <form className="mt-2" onSubmit={formSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">firstName</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.firstName} name='firstName' onChange={handleChange} />
          <div className='text-danger'>
            {!error.firstName ? "" : "Format for first name is invalid"}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.lastName} onChange={handleChange} />
          <div className='text-danger'>
            {!error.lastName ? "" : "Format for last name is invalid"}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Email Address</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={formData.address} name="emailName" onChange={handleChange} />
          <div className='text-danger'>
            {!error.emailName ? "" : "Format for email is invalid"}
          </div>
        </div>
        <button type="submit" className="btn btn-primary align-self-start">Submit</button>
      </form>

      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >+</button>
      <p>Calculation: {calculation}</p>
      <Link to="/" >Back</Link><br />
      <Link to="/dashboard" >Final Step</Link>
    </>
  )
}

export default Contact