import React from 'react';
import Form from './Form';

const EditableForm = (props) => {

    return(
        <div>
      <Form
        values={props.values}
        update={props.onChange}
        submit={props.updateForm}
      />

    </div>
    )
}

export default EditableForm;