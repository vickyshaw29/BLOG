import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Toolbar,
  SaveButton,
} from 'react-admin';

const PostToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton
      label="Save"
      redirect="list"
      submitOnEnter={true}
      disabled={props.pristine}
    />
  </Toolbar>
);

const CreatePost = (props) => {
  return (
    <Create title="Create Post" {...props}>
      <SimpleForm toolbar={<PostToolbar />}>
        <TextInput source="title" fullWidth />
        <TextInput multiline source="body" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default CreatePost;
