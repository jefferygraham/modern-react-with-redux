import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: call callback from parent component
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
