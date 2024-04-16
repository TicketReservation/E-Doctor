import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  login: (email: string, password: string) => void;
  error: string | null;
}

const Login: React.FC<Props> = ({ login, error }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
    if (!error) {
      if (email === "admin@healthcare.com") {
        window.location.href = 'http://localhost:5000/#/dashboard';
      }
      if (localStorage.getItem("userType") === 'Doctor') { navigate('/doctor'); }
      if (localStorage.getItem("userType") === 'Patient') { navigate('/'); }
    }
  }

  return (
    <div>
      <div className='frmm'>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: '#007e85', marginLeft: '110px' }}>Login</h2>
          <div className="container">
            <div className="">
              <img
                src="https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Doctor"
                style={{ marginBottom: '20px', borderRadius: '20%', marginTop: '20px', background: 'transparent' }}
              />
            </div>
            <div className="form"></div>
            <input style={{ width: '300px' }} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <input style={{ width: '300px' }} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button style={{ width: '300px' }} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { auth: { error: string | null } }) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    // login: (email: string, password: string) => dispatch(login(email, password)),
  };
};

// Exporting the connected component directly
// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Marking the component as a Client Component
export { Login };
