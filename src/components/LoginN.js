/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const LoginN = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = `${firstName} ${lastName}`;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <label>
        First name:
        {' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        {' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p id="pformulario">
        Your ticket will be issued to:
        {' '}
        <b>{fullName}</b>
      </p>
    </>
  );
};
export default LoginN;
