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

  const handleChange = (e) => {

    console.log(e.target.value.length);
    const attrName = e.target.name;

    switch (attrName) {
      case "firstName":
        if (e.target.name == "firstName") {
          if (validNameRegix.test(e.target.value)) {
            setData((prev) => ({ ...prev, firstName: true }));
          } else {
            setData((prev) => ({ ...prev, firstName: false }));
          }
        }
        break;
      case "lastName":
        if (e.target.name == "lastName") {
          if (validNameRegix.test(e.target.value)) {
            setData((prev) => ({ ...prev, lastName: true }));
          } else {
            setData((prev) => ({ ...prev, lastName: false }));
          }
        }
        break;
      case "emailName":
        if (e.target.name == "emailName") {
          if (validNameRegix.test(e.target.value)) {
            setData((prev) => ({ ...prev, emailName: true }));
          } else {
            setData((prev) => ({ ...prev, emailName: false }));
          }
        }
        break;
    }
  }

  return (
    <>
      <h3>"For Validation Component form"</h3>
      <form className="mt-2">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">firstName</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.firstName} name='firstName' onChange={handleChange} />
          <div className='text-danger'>
            {!error.firstName ? "" : "not matched"}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.lastName} onChange={handleChange} />
          <div className='text-danger'>
            {!error.lastName ? "" : "not matched"}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="exampleInputPassword1" value={formData.address} name="emailName" onChange={handleChange} />
          <div className='text-danger'>
            {!error.emailName ? "" : "not matched"}
          </div>
        </div>
        <button type="submit" className="btn btn-primary align-self-start">Submit</button>
      </form>

      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >+</button>
      <p>Calculation: {calculation}</p>
      <Link to="/" >Back</Link>
    </>
  )
}

export default Contact