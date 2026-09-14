import { MyContext } from 'components/Provider';
import { Component, useContext, useEffect, useState } from 'react';

const useLocaleStorage = key => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? ''
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const SignUpForm = ({ onSubmit }) => {
  const [email, setEmail] = useLocaleStorage('email');
  const [password, setPassword] = useLocaleStorage('password');

  const ctx = useContext(MyContext);

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ email, password });
  };

  const handleChange = evt => {
    console.log(ctx);
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <label htmlFor="">
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export class OldSignUpForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = evt => {
    console.log(evt.target.value);
    console.log(evt.target.name);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
