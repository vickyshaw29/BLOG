import React from 'react';
import { TopToolbar, Button, EditButton } from 'react-admin';

const PostActions = ({ basePath, data, resource }) => {
  const customAction = () => {};
  return (
    <TopToolbar>
      <EditButton basePath={basePath} record={data} />
      <Button color="primary" onClick={customAction}>
        Custom Action
      </Button>
    </TopToolbar>
  );
};

export default PostActions;
