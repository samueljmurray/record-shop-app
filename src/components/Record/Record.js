import React from 'react';

import './Record.css';

export default (props => (
  <dl className={`Record ${props.record.archivedAt && "Record-archived"}`}>
    <dt>{props.record.title}</dt>
    <dd>
      {props.record.artists.map(artist => artist.name).join(", ")}
      <br/>{props.record.year.toString()}.
      {props.record.archivedAt && (
        <React.Fragment>
          <br/><em>Unavailable</em>
        </React.Fragment>
      )}
    </dd>
  </dl>
));
