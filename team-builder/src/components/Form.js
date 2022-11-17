import React, { useEffect, useState, useRef } from 'react';

const Form = (props) => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const onChange = evt => {
    const { name, value } = evt.target;
    props.update(name, value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    props.submit();
    evt.target.reset();
  };

  useEffect(() => {
    
  }, [props.edit])

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form container">
        <label>First Name:
          <input
          ref={firstRef}
          name="username"
          type="text"
          placeholder="Name Here"
          onChange={onChange}
          value={props.values.username}
          />
        </label>
        <label>Email:
          <input
          ref={lastRef}
          name="email"
          placeholder="Enter Email"
          type="email"
          onChange={onChange}
          value={props.values.email}
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
