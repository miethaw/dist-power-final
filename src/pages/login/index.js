import React, { useState, useEffect } from 'react';
import { userModels } from '../../models/userModels/user.models';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  let loggingIn = {}

  useEffect(() => {
    localStorage.clear()
    userModels.logout();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      userModels.login(email, password).then(user => {
        if (user) {
          loggingIn = user
        }
      })

    }
  }

  return (
    <div className="container col-lg-3 col-sm-5 justify-content-center"
      style={{
        borderRadius: 15,
        margin: 0,
        position: 'absolute',
        top: '0%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, 50%)',
      }}
    >
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <div style={{ textAlign: 'center', marginBottom: '1em' }}>
            <img className='img-responsiver' src={"./loginimg.png"} alt="logo" />
          </div> */}
          <label className="form-control-label">Email</label>
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input type="email" name="email" value={email}
              onChange={handleChange}
              className={'form-control' + (submitted && !email ? ' is-invalid' : '')}
              placeholder="Email" />
          </div>
          {submitted && !email &&
            <div className="invalid-feedback" style={{ color: 'red', fontStyle: 'italic' }}>Email is required</div>
          }

        </div>
        <div className="form-group has-danger">
          <label className="form-control-label">Password</label>
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input type="password" name="password"
              value={password} onChange={handleChange}
              className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
              placeholder="Password" />
          </div>
          {submitted && !password &&
            <div className="invalid-feedback" style={{ color: 'red', fontStyle: 'italic' }}>Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '15px' }}>
            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
          </button>
        </div>
      </form>
    </div>

  );
}

export default Login