import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import axios from "axios";



function App() {

  const [ isEditing, setIsEditing ] = useState();
  const [ teamMates, setTeamMates ] = useState([]);
  const [ values, setValues ] = useState({
    username: ' ',
    email: ' ',
    role: ' ',
  });
  const [ editMember, setEditMember ] = useState(null);

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value});
    //console.log(value);
  }

  
  const updateForm = () => {
    setTeamMates([values, ...teamMates]);

  }

  const handleEdit = (name, mail, roll) => {
    setEditMember({
      username: name,
      email: mail,
      role: roll,
    })
    setValues(editMember);
    //console.log(editMember);
    console.log(values);
  }

  
  return (
    <div>
      <Form
        values={values}
        update={onChange}
        submit={updateForm}
        edit={editMember}
      />
      {teamMates.map((mate, index) => {
        return (
          <>
          <TeamMember edit={handleEdit} key={mate.index} details={mate}/>
          </>
        )
      })
    }
    </div>
  )
}

export default App;
