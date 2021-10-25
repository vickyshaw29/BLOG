import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

const ShowPost = (props) => {
  console.log(props)
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowPost;
