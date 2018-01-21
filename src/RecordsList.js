import React from 'react';

import Record from "./Record";

export default (props => (
  <div>
    {
      props.records.map(record => (
        <Record key={`record-${record.id}`} record={record} />
      ))
    }
  </div>
));
