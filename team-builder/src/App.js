import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import axios from "axios";



function App() {
  const [editID, setEditID] = useState(null);
  const [ teamMates, setTeamMates ] = useState([]);
  const [ values, setValues ] = useState({
    username: ' ',
    email: ' ',
    role: ' ',
  });
  const [ editMember, setEditMember ] = useState(null);

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value});
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
    // console.log(editMember);
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
          <TeamMember edit={handleEdit} submit={updateForm}  key={mate.index} details={mate}/>
          </>
        )
      })
    }
    </div>
  )
}

export default App;
