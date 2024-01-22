import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');

  return (
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>
          <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign In</h2>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

              <button className='w-100 mb-4 btn-primary' size='md'>sign up</button>

              <div className="text-center">

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
export default Login