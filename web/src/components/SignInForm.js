import React from 'react'
import './SignInForm.css';

function SignInForm({
  onSignIn,
  admin
  // admin is boolean = true/false
}) {
  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-lg-4 col-1'/>
      <div className='col-lg-4 col-10 background-grey py-2 my-4'>
        <h1 className="py-2">
          { admin ? ('Admin Login') : ('Login') }
        </h1>
        <form
          
          onSubmit={ (event) => {
            // Prevent old-school form submission
            event.preventDefault()
            
            const form = event.target
            const elements = form.elements // Allows looking up fields using their 'name' attributes
            // Get entered values from fields
            const email = elements.email.value
            const password = elements.password.value
            // Pass this information along to the parent component
            onSignIn({ email, password })
          } }
        > 
          <div className="form-group">
            <label
              className='mb-1'
            >
              {'Email: '}
              <input
                className="form-control"
                type='email'
                name='email'
              />
            </label>
            <small id="emailHelp" class="form-text text-muted">{ admin ? ( 'Welcome back Tao, please contact Jared 0438 068 490 if you need any technical support' ) : ( "We'll never share your email with anyone else." ) }</small>
            
          </div>
          <label
            className='mb-1'
          >
            {'Password: '}
            <input
              type='password'
              name='password'
              className="form-control"
            />
          </label>
          <br/>
          <button className='btn-yellow'>
            Sign In
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignInForm