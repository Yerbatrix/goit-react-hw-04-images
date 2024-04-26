import React from 'react';
import { Oval as LoaderSpinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <LoaderSpinner color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
