import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {editItem} from "../actions/items";

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      pendingName: this.props.name,
    };
  }

  toggleEdit = () => {
    this.setState({
        isEditing: !this.state.isEditing,
      }
    )
  };

  handleInput = event => {
    this.setState({
      pendingName: event.target.value,
    });
  };

  handleEditing = () => {
    const newItem = this.state.pendingName;
    const index = this.props.index;
    this.props.dispatch(editItem(index, newItem));
    this.toggleEdit();
  };

  render(){
    return(
      <div className="card card-outline-primary mb-3">
        <div className="card-block">
          <div className="row">
            <div className="col-md-9">
              {this.state.isEditing
                ?
                <form className="form" onSubmit={this.handleEditing}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg col-md-12 mb-2 mr-sm-2 mb-sm-0 edit-item-input"
                      defaultValue={this.props.name}
                      onChange={this.handleInput}
                    />
                  </div>
                </form>
                :
                <p className="item-body">
                  {this.props.name}
                </p>
              }

            </div>
            <div className="col-md-3 text-right">
              {this.state.isEditing
                ?
                <button
                  type="submit"
                  className="btn btn-success save-button"
                  onClick={this.handleEditing}>
                  Save
                </button>
                :
                <React.Fragment>
                  <button
                    type="submit"
                    className="btn btn-warning edit-button"
                    onClick={this.toggleEdit}>
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger delete-button"
                    onClick={this.props.handleDelete}>
                    Delete
                  </button>
                </React.Fragment>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ListItem;
