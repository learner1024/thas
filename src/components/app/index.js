import React from 'react';
import Topbar from '../topBar';
import DetailArea from '../detailArea';
import {BrowserRouter} from 'react-router-dom';
export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Topbar />
        <DetailArea />
      </React.Fragment>
    </BrowserRouter>
  );
}