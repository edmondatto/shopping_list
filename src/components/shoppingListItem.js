import React, {Component} from 'react';

class ListItem extends Component {
  render(){
    return(
      <div className="card card-outline-primary mb-3">
        <div className="card-block">
          <div className="row">
            <div className="col-md-9">
              <p className="item-body">
                Carton of milk
              </p>
            </div>
            <div className="col-md-3 text-right">
              <button type="submit" className="btn btn-warning edit-button">Edit</button>
              <button type="submit" className="btn btn-danger delete-button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;