import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import axios from "axios";


function App() {
  const [ teamMates, setTeamMates ] = useState([]);

  console.log(teamMates);

  const [ values, setValues ] = useState({
    username: ' ',
    email: ' ',
    role: ' '
  });


  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }

  
  const updateForm = () => {
    setTeamMates([values, ...teamMates]);
  }




  return (
    <div>
      <Form
        values={values}
        update={onChange}
        submit={updateForm}
      />
      {teamMates.map((mate, index) => {
        return (
          <TeamMember key={mate.index} details={mate}/>
        )
      })
    }
    </div>
  )
}

export default App;
