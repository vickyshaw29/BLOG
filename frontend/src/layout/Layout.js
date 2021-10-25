import React from 'react';
import AppBar from './AppBar';
import { Layout } from 'react-admin';
import { theme } from './Theme';

const layout = (props) => {
  return <Layout {...props} appBar={AppBar} theme={theme}/>;
};

export default layout;
