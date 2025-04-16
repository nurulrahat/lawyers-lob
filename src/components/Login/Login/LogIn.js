import { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { googleSignIn, googleSignOut, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './ManageLogin';
import './logIn.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


initializeLoginFramework();

function LogIn() {
  const [ , setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    error: '',
    success: false
  });
  const [newUser, setNewUser] = useState(false);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
      })
  }
  const handleGoogleSignOut = () => {
    googleSignOut()
      .then(res => {
        setUser(res)
        setLoggedInUser(res);
      })

  }
  


  //validation section
  const handleOnchange = (event) => {
    const test = event.target.value;
    console.log(test, event.target.value)
    let isFormValid = true;
    if (event.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value)
      console.log(isFormValid)
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const isPasswordNumber = /\d{1}/.test(event.target.value)
      isFormValid = isPasswordValid && isPasswordNumber
    }
    if (isFormValid) {
      const newUserInfo = { ...user }
      newUserInfo[event.target.name] = event.target.value; //why here[ ] the bracket used
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email, user.password)
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          setUser(res)
          setLoggedInUser(res);
          history.replace(from);
        })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res)
          setUser(res)
          setLoggedInUser(res);
          history.replace(from);
        })

    }

  }


  return (
    <div className="logInCls d-flex justify-content-center align-items-center vh-100 bg-light">
  <div className="p-4 bg-white shadow rounded" style={{ width: "100%", maxWidth: "400px" }}>
    <h3 className="text-center mb-4">Create or Log In to Your Account</h3>

    <form onSubmit={handleSubmit}>
      <h5 className="text-center mb-3">{newUser ? "Create Account" : "Log In"}</h5>

      {newUser && (
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onBlur={handleOnchange}
            placeholder="Type Name"
          />
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          required
          onBlur={handleOnchange}
          placeholder="Type Email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          required
          onBlur={handleOnchange}
          placeholder="Type Password"
        />
      </div>

      <div className="d-grid mb-3">
        <input
          type="submit"
          className="btn btn-primary"
          value={newUser ? "Sign Up" : "Sign In"}
        />
      </div>

      <div className="text-center">
        <Link onClick={() => setNewUser(!newUser)}>
          {newUser ? "Already have an account? Log In" : "New here? Create an account"}
        </Link>
      </div>
    </form>

    <hr className="my-4" />

    <div className="d-grid">
      {user.isSignedIn ? (
        <button className="btn btn-outline-danger" onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
        </button>
      )}
    </div>

    <div className="text-center mt-3">
      {user.success ? (
        <p className="text-success">
          You have successfully {newUser ? "created your account" : "signed in"}
        </p>
      ) : (
        <p className="text-danger">{user.error}</p>
      )}
    </div>
  </div>
</div>

  );
}

export default LogIn;
