import React from 'react';

export default class SearchBox extends React.Component {
  render() {
    return(
      <div className="searchBox panel panel-default">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="originInput" className="col-sm-3 control-label">Origin</label>
            <div className="col-sm-9">
              <input type="text" className="controls form-control" id="originInput" placeholder="Enter starting location"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="destinationInput" className="col-sm-3 control-label">Destination</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="destinationInput" placeholder="Enter destination"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}