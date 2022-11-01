import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    imageUrl: '',
    loading: true,
  };

  componentDidMount() {
    const dogOnLocalStorage = localStorage.getItem('imageUrl');
    if (dogOnLocalStorage) {
      this.setState({
        imageUrl: dogOnLocalStorage,
        loading: false,
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const terrier = nextState.imageUrl.includes('terrier');
    return !terrier;
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/');
    alert(dogBreed[4]);
  }

  fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(url);
    const response = await request.json();
    this.setState({
      imageUrl: response.message,
      loading: false,
    });
  };

  render() {
    const { imageUrl, loading } = this.state;
    const loadingElement = <p>Loading...</p>;
    return (
      <div className="main-container">
        <h1>Doguinho aleatório</h1>
        { loading
          ? loadingElement
          : <img src={ imageUrl } alt="Doguinho aleatório" width={ 400 } />}
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
