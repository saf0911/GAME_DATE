import React, {Component} from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import {
  createUser,
  loadUsers,
} from '../actions';
import PropTypes from 'prop-types';



const FORM_VALUES = {
  firstName: '',
  lastName: '',
  birthdate: '',
  address: '',
  State: '',
  Zip: '',
  asthma: '',
};

class AddUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = FORM_VALUES;

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state
    );

    this.setState(FORM_VALUES);
  }


  render() {
    return (
      <div>
        <Header />
        <h1>
          Create a profile
        </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>


          First name:<br />
            <input
              type='text'
              name='firstName'
              placeholder='Add First name'
              value={this.state.firstName}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />

          Last name:<br />
            <input
              type='text'
              name='lastName'
              placeholder='Add Last name'
              value={this.state.lastName}
              onChange={this.handleInputChange.bind(this)}
             />
            <br />

          Birthdate: <br />
            <input
              type="number, String"
              name="birthdate"
              placeholder="mm/dd/yyyy"
              value={this.state.birthdate}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />

          Address: <br />
            <input
              type='text'
              name='address'
              placeholder='Add Address'
              value={this.state.address}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
          City: <br />
            <input
            type='text'
            name='city'
            placeholder='City'
            value={this.state.city}
            onChange={this.handleInputChange.bind(this)}
            />
            <br />
          State:<br />
            <input
              type='text'
              name='username'
              placeholder='State'
              value={this.state.State}
              onChange={this.handleInputChange.bind(this)}
             />
             <br />

             Zip:<br />
               <input
                 type='text'
                 name='username'
                 placeholder='Zip'
                 value={this.state.zip}
                 onChange={this.handleInputChange.bind(this)}
                />
                <br /><br />

            Asthma:<br />
              <select>
                <option value={this.state.asthma}>Yes</option>
                <option value={this.state.asthma}>No</option>
                </select>

              Explain
                <input
                  type='text'
                  name='asthma'
                  placeholder='Asthma'
                  value={this.state.asthma}
                  onChange={this.handleInputChange.bind(this)}
                   />


              <br /> <br/>
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(createUser(values));
    },
    onMount: () => {
      dispatch(loadUsers());
    }
  };
}


AddUserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadUsers: PropTypes.func,
  onMount: PropTypes.func.isRequired,
};

// null will be mapstatetoprops and mapdispatchtoprops
export default withRedux(initStore, null, mapDispatchToProps)(AddUserPage);
