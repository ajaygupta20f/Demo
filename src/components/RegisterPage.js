import React, { useState } from 'react';
import { IoEye, IoEyeOff, IoArrowBack } from 'react-icons/io5';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    countryCode: 'UK (+44)',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: 'Prefer not to say'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countryCodes = [
    'UK (+44)', 'US (+1)', 'CA (+1)', 'AU (+61)', 'DE (+49)', 'FR (+33)',
    'IT (+39)', 'ES (+34)', 'NL (+31)', 'BE (+32)', 'CH (+41)', 'AT (+43)'
  ];

  const genders = [
    'Male', 'Female', 'Non-binary', 'Prefer not to say', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Registration successful! Welcome to Club Billionaire!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        username: '',
        countryCode: 'UK (+44)',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        gender: 'Prefer not to say'
      });
    }, 2000);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="register-page">
      <div className="register-page-container">
        {/* Back Button */}
        <button className="back-button" onClick={goBack}>
          <IoArrowBack />
          <span>Back</span>
        </button>

        <div className="register-content">
          <div className="register-header">
            <h1 className="register-title">REGISTER</h1>
            <p className="register-description">
              Sign up to bid, buy and sell, join events, and access exclusive content and offers.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Email Address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username" className="form-label">Choose a User Name</label>
              <div className="username-input-container">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`form-input ${errors.username ? 'error' : ''}`}
                  placeholder="Choose a User Name"
                  maxLength={20}
                />
                <span className="character-count">{formData.username.length}/20</span>
              </div>
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>

            <div className="form-row">
              <div className="form-group phone-code-group">
                <label htmlFor="countryCode" className="form-label">Code</label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
              <div className="form-group phone-number-group">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password" className="form-label">Choose a Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Choose a Password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                  </button>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-select"
              >
                {genders.map((gender) => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
