import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalContainer } from './Modal.styled';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Clock } from 'components/Clock/Clock';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscapeClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapeClose);
  }

  onEscapeClose = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  submitForm = data => {
    this.props.onClose();
    console.log(data);
  };

  render() {
    return (
      <Backdrop onClick={this.onBackdropClick}>
        <ModalContainer>
          <button onClick={this.props.onClose} type="button">
            Close Modal
          </button>
          <SignUpForm onSubmit={this.submitForm} />
          <Clock />
        </ModalContainer>
      </Backdrop>
    );
  }
}
