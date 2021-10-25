import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditPost = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <TextInput multiline source="body" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default EditPost;
