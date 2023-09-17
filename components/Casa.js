import React from 'react';

const Casa = ({ escura }) => {
  const cor = escura ? 'dark' : 'light';
  return <div className={`casa ${cor}`} />;
};

export default Casa;
