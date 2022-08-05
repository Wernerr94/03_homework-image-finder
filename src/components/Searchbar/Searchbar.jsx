import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <header className={css.searchbar}>
          <form className={css.form} onSubmit={this.submitHandler}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}>Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              value={this.state.value}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
