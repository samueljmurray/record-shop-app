import React, { Component } from 'react';

import RecordsList from "./RecordsList";
import './RecordsListContainer.css';

class RecordsListContainerRest extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      records: []
    };
  }

  componentDidMount() {
    // Get Records (with references to artists)
    fetch("http://localhost:4000/api/records?limit=10&offset=0").then(res => {
      res.json().then(records => {
        this.setState(state => ({
          ...state,
          loading: false,
          records: records
        }));

        // Parse records and fetch each of the artists for each record
        records.forEach((record, i) => {
          record.artists.forEach(artistUrl => {
            fetch(artistUrl).then(res => {
              res.json().then(artist => {
                // Replace artist URL with artist object
                this.setState(state => {
                  const recordsUpdated = state.records.map((record, j) => {
                    if (j === i) {
                      const artistUrlIndex = record.artists.indexOf(artistUrl);
                      record.artists.splice(artistUrlIndex, 1);
                      return {
                        ...record,
                        artists: [...record.artists, artist]
                      };
                    } else {
                      return record;
                    }
                  });
                  return {
                    ...state,
                    records: recordsUpdated
                  };
                });
              });
            });
          });
        });
      });
    }).catch(() => {
      this.setState(state => ({
        ...state,
        loading: false
      }));
    });
  }

  render() {
    return (
      <div className="RecordsListContainer">
        {this.state.loading && <p>LOADING!</p>}
        {this.state.records.length > 0 && (
          <RecordsList records={this.state.records} />
        )}
      </div>
    );
  }
}

export default RecordsListContainerRest;
