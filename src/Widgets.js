import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>"{subtitle}"</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('My FirstBuild', 'Papa react is back-learnt lot papaa')}
      {newsArticle('India corona virus Update', 'Lockdown 5.0')}
      {newsArticle(
        'A talk with Elon Musk',
        'Says-Sucess  works beyond age,money,investment everything!!'
      )}
    </div>
  );
}

export default Widgets;
