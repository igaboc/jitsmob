import React from 'react'
import './SignInForm.css';


function SignUpForm({
  onSignUp,

}) {
  return (
    <div className='container-fluid background-purple spacing'>
      <div className='row'>
        <div className='col-lg-4 col-1' />
        <div className='col-lg-4 col-10 py-2 my-4 text-center'>
          <h1 className="py-2 login-type">
            Sign Up to Jitsmob
          </h1>
          <div className='background-white inner-forms'>
            <form

              onSubmit={(event) => {
                // Prevent old-school form submission
                event.preventDefault()

                const form = event.target
                const elements = form.elements // Allows looking up fields using their 'name' attributes
                // Get entered values from fields
                const email = elements.email.value
                const password = elements.password.value
                const firstName = elements.firstName.value
                const lastName = elements.lastName.value
                // Pass this information along to the parent component
                onSignUp({ email, password, firstName, lastName })
              }}
            >
              <div className="form-group row">
                <div className="col-3">
                  <label>
                    Email: 
                  </label>
                </div>
                <div className="col-8"> 
                  <input
                    className="form-control"
                    type='email'
                    name='email'
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-3">
                  <label>
                    Password: 
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type='password'
                    name='password'
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group row">
                <div className="col-3">
                  <label>
                    First Name: 
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type='text'
                    name='firstName'
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-3">
                  <label>
                    Last Name:
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type='text'
                    name='lastName'
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <button className='btn-yellow'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm