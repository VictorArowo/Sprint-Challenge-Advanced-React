import React from 'react';
import useApi from '../hooks/useApi';

const withHooks = Component => {
  return props => {
    const data = useApi('http://localhost:5005/api/players');

    return <Component data={data} {...props} />;
  };
};

export default withHooks;
