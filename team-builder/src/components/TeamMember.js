import React, { useEffect } from 'react';
import EditableForm from './editForm';

export default function TeamMember(props) {
  const {details} = props

  if (!details) {
    return <h3>Working fetching your friends details... </h3>
  }

  // const onChange = evt => {
  //   evt.preventDefault();
  //   props.edit(details.name, details.email, details.role);
  // };

  const onSubmit = evt => {
    evt.preventDefault();
    props.edit(details.username, details.email, details.role)
  }




  return (
    <div className="friend container">
    <h2>{details.username}</h2>
    <p>Email: {details.email}</p>
    <p>Role: {details.role}</p>
    <button onClick={onSubmit} className="button">Edit</button>
    </div>
  )
}
