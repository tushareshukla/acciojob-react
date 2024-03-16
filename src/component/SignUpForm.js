import React, { useState } from 'react';
import '../component/SignUpForm.css'; // Import CSS file for styling

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="container">
      <div className="center">
        <div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className={`form-control ${emailError ? 'is-invalid' : email && 'is-valid'}`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className={`form-control ${passwordError ? 'is-invalid' : password && 'is-valid'}`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className={`form-control ${confirmPasswordError ? 'is-invalid' : confirmPassword && 'is-valid'}`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
