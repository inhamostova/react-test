import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalContainer } from './Modal.styled';

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

  render() {
    return (
      <Backdrop onClick={this.onBackdropClick}>
        <ModalContainer>
          <button onClick={this.props.onClose} type="button">
            Close Modal
          </button>
        </ModalContainer>
      </Backdrop>
    );
  }
}
