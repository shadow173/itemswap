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
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const externalApiUrl = 'https://example.com/api/register'; // Replace with your external API URL

    try {
      const response = await fetch(externalApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // Handle response here
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error here
    }
  };

  return (
    <SlimLayout>
    <h2 className="mt-20 text-lg font-semibold text-gray-900">Get started</h2>
    <p className="mt-2 text-sm text-gray-700">
      Already registered?{' '}
      <Link href="/login">
        <a className="font-medium text-blue-600 hover:underline">Sign in</a>
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
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
        </label>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  );
}
