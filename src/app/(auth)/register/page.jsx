"use client"
import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { TextField } from '@/components/Fields';
import { SlimLayout } from '@/components/SlimLayout';



export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
    terms: false,
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })};
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const externalApiUrl = 'https://162.248.100.28:3000/user'; 
    //const externalApiUrl = 'https://api.swappable.net/user'; 


    const payload = {
      ...formData,
      // Map agreeToTerms to terms
    };

    try {
      const response = await fetch(externalApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError('Error: ' + errorData.message); // Customize error message based on your API response
        setIsSubmitting(false);
        return;
      }

      // Handle successful response
      setIsSubmitting(false);
      // Redirect or show success message
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error: ' + error.message); // Display network or other errors
      setIsSubmitting(false);
    }
  
  
    try {
      const response = await fetch(externalApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError('Error: ' + errorData.message); // Customize error message based on your API response
        setIsSubmitting(false);
        return;
      }
  
      // Handle successful response
      setIsSubmitting(false);
      // Redirect or show success message
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error: ' + error.message); // Display network or other errors
      setIsSubmitting(false);
    }
  };
  
  
  return (
    <SlimLayout>
    <h2 className="mt-20 text-lg font-semibold text-gray-900">Get started</h2>
    <p className="mt-2 text-sm text-gray-700">
      Already registered?{' '}
      <Link href="/login">
        {/* <a className="font-medium text-blue-600 hover:underline">Sign in</a> */}
      </Link>
      {' '}to your account.
    </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="Username"
          name="username"
          type="text"
          required
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          type="text"
          required
          onChange={handleChange}
        />
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          onChange={handleChange}
        />
        <TextField
          className="col-span-full"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          required
          onChange={handleChange}
        />
        <TextField
          className="col-span-full"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          onChange={handleChange}
        />
        <TextField
          className="col-span-full"
          label="Confirm Password"
          name="passwordConfirmation"
          type="password"
          required
          onChange={handleChange}
        />
        <label className="col-span-full">
          Agree to Terms:
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
        </label>
        <div className="col-span-full">
        {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" disabled={isSubmitting} variant="solid" color="blue" className="w-full">
        {isSubmitting ? 'Submitting...' : 'Sign up →'}
      </Button>
        </div>
      </form>
    </SlimLayout>
  );
}
