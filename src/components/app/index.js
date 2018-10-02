import React from 'react';
import Topbar from '../topBar';
import DetailArea from '../detailArea';
import {HashRouter as Router} from 'react-router-dom';
export default () => {
  return (
    <Router>
      <React.Fragment>
        <Topbar />
        <DetailArea />
      </React.Fragment>
    </Router>
  );
}