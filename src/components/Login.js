import React, { Component } from 'react';
import classes from './Login.module.css';
export default class Login extends Component {
  state = {
    name: '',
    email: '',
    age: '',
    phone: '',
    dob: '',
    recommendation: '',
    cuisine: [],
    Comments: '',
    rating: '',
  };
  handleChangeInput = (e, name) => {
    switch (name) {
      case 'name':
        this.setState({
          name: e.target.value,
        });
        break;
      case 'email':
        this.setState({
          email: e.target.value,
        });
        break;
      case 'phone':
        this.setState({
          phone: e.target.value,
        });
        break;
      case 'dob':
        this.setState({
          dob: e.target.value,
        });
        break;
      case 'recommendation':
        this.setState({
          recommendation: e.target.value,
        });
        break;
      case 'rating':
        this.setState({
          rating: e.target.value,
        });
        break;

      case 'cuisine':
        if (this.state.cuisine.indexOf(e.target.value) !== -1) {
          let temp = [...this.state.cuisine];
          temp.splice(temp.indexOf(e.target.value), 1);
          this.setState({
            cuisine: temp,
          });
        } else {
          this.setState({
            cuisine: [...this.state.cuisine, e.target.value],
          });
        }

        break;
      case 'Comments':
        this.setState({
          Comments: e.target.value,
        });
        break;
      default:
        console.log('name not found');
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state };
    console.log(data);
  };
  render() {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(<option value={i}>{i}</option>);
    }
    return (
      <div className={classes.Login}>
        <form className={classes.Form} onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='name' className={classes.Label}>
            Name
          </label>
          <input
            type='text'
            id='name'
            className={classes.Input}
            placeholder='Name'
            value={this.state.name}
            onChange={(e) => this.handleChangeInput(e, 'name')}
          />
          <label htmlFor='email' className={classes.Label}>
            Email
          </label>
          <input
            type='email'
            id='email'
            className={classes.Input}
            placeholder='email'
            value={this.state.email}
            onChange={(e) => this.handleChangeInput(e, 'email')}
          />
          <label htmlFor='phone' className={classes.Label}>
            Phone
          </label>
          <input
            type='text'
            id='phone'
            className={classes.Input}
            placeholder='Enter Your Phone Number'
            value={this.state.phone}
            onChange={(e) => this.handleChangeInput(e, 'phone')}
          />
          <label htmlFor='dob' className={classes.Label}>
            Date of Birth
          </label>
          <input
            type='text'
            id='dob'
            className={classes.Input}
            placeholder='DD/MM/YYYY'
            value={this.state.dob}
            onChange={(e) => this.handleChangeInput(e, 'dob')}
          />
          <label htmlFor='rating' className={classes.Label}>
            How many rating (1-10) would you give us?
          </label>
          <select
            name=''
            id='rating'
            onChange={(e) => this.handleChangeInput(e, 'rating')}
          >
            <option value='default'>Choose One</option>
            {arr}
          </select>
          <label htmlFor='recommendation' className={classes.Label}>
            Would you recommend this to your friend?
          </label>
          <div>
            <input
              type='radio'
              id='Yes'
              value='Yes'
              name='recommendation'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='Yes'>Yes</label>
          </div>
          <div>
            <input
              type='radio'
              id='No'
              value='No'
              name='recommendation'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='No'>No</label>
          </div>
          <div>
            <input
              type='radio'
              id='May be'
              value='May be'
              name='recommendation'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'recommendation')}
            />
            <label htmlFor='May be'>May be</label>
          </div>

          <label htmlFor='cuisine' className={classes.Label}>
            Cuisine Preference
          </label>
          <div>
            <input
              type='checkbox'
              id='Italian'
              value='Italian'
              name='cuisine'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'cuisine')}
            />
            <label htmlFor='Italian'>Italian</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Indian'
              value='Indian'
              name='cuisine'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'cuisine')}
            />
            <label htmlFor='Indian'>Indian</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Turkish'
              value='Turkish'
              name='cuisine'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'cuisine')}
            />
            <label htmlFor='Turkish'>Turkish</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Mexican'
              value='Mexican'
              name='cuisine'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'cuisine')}
            />
            <label htmlFor='Mexican'>Mexican</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Chinese'
              value='Chinese'
              name='cuisine'
              className={classes.Input}
              onChange={(e) => this.handleChangeInput(e, 'cuisine')}
            />
            <label htmlFor='Chinese'>Chinese</label>
          </div>
          <label htmlFor='Comments'>Suggestions</label>
          <textarea
            name='comments'
            id='Comments'
            cols='30'
            rows='10'
            className={`${classes.Input} ${classes.TextArea}`}
            placeholder='It might help us improve...'
            onChange={(e) => this.handleChangeInput(e, 'Comments')}
          ></textarea>
          <input
            type='submit'
            value='Submit'
            className={`${classes.Input} ${classes.SubmitBtn}`}
          />
        </form>
      </div>
    );
  }
}
