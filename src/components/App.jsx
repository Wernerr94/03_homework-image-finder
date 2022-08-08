// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import './App.css';
import imageAPI from '../services/pixabay-api';

class App extends Component {
  state = {
    value: '',
    images: [],
    pickedImage: null,
    pages: 1,
    showLoader: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.value !== prevState.value ||
      this.state.pages !== prevState.pages
    ) {
      this.setState({ showLoader: true });
      setTimeout(() => {
        imageAPI
          .getImages(this.state.value, this.state.pages)
          .then(res =>
            this.setState(prevState => {
              return {
                images: prevState.images.concat(res),
              };
            })
          )
          .finally(() => this.setState({ showLoader: false }));
      }, 500);
    }
  }
  handleLoader = () => {
    this.setState(prevState => {
      return {
        pages: prevState.pages + 1,
      };
    });
  };
  toggleModal = img => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
        pickedImage: img,
      };
    });
  };
  handleSubmit = value => {
    this.setState({ value });
  };

  render() {
    const { images, showLoader, showModal, pickedImage } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} modalOpener={this.toggleModal} />
        {(images.length > 0) & !showLoader && (
          <Button onLoad={this.handleLoader} />
        )}
        {showLoader && <Loader color="#457b9d" height={300} width={300} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={pickedImage.largeImageURL} alt={pickedImage.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
