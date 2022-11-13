import React, { useState } from 'react';

const Form = (props) => {

  const edit = props.edit

  const onChange = evt => {
    const { name, value } = evt.target;
    props.update(name, value);
  };


  const onSubmit = evt => {
    evt.preventDefault();
    props.submit();
  };


  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form container">
        <label>First Name:
          <input
          name="username"
          type="text"
          placeholder="Name Here"
          onChange={onChange}
          value={props.values.username}
          />
        </label>
        <label>Email:
          <input
          name="email"
          placeholder="Enter Email"
          type="email"
          onChange={onChange}
          vaue={props.values.email}
          />
        </label>
        <label>Role:
          <select
          name="role"
          onChange={onChange}
          value={props.values.role}
          >
          <option>Backend Engineer</option>
          <option>Frontend Engineer</option>
          <option>Fullstack Developer</option>
          <option>Django Developer</option>
          <option>React Developer</option>
          <option>Swift Developer</option>
          <option>Learn React</option>
          </select>
        </label>
          <input type="submit" value="Autobots Unite!" className="button" />
      </form>
    </div>
  );

}

export default Form;
