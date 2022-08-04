import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div className="App">
      <form>
      <label>First Name: </label>
        <input
        name="name" onChange={onInputChange}
        />
        <label>Email: </label>
        <input
        name="email" onChange={onInputChange}
        />
        <label>Role: </label>
        <select
        name="roleInput" onChange={onInputChange}
        >
        <option>Backend Engineer</option>
        <option>Frontend Engineer</option>
        <option>Fullstack Developer</option>
        <option>Django Developer</option>
        <option>React Developer</option>
        <option>Swift Developer</option>
        </select>
      </form>
    </div>
  );
}
