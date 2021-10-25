import React from 'react';
import { Admin, Resource } from 'react-admin';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostList from './components/PostList';
import jsonServerProvider from 'ra-data-json-server';
import layout from './layout/Layout';
import ShowPost from './components/ShowPost';

const App = () => {
  return (
    <Admin
      dataProvider={jsonServerProvider(process.env.REACT_APP_API_KEY)}
      layout={layout}
    >
      <Resource
        name="Posts"
        show={ShowPost}
        list={PostList}
        create={CreatePost}
        edit={EditPost}
      />
    </Admin>
  );
};

export default App;
