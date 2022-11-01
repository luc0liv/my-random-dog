import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    imageUrl: '',
    loading: true,
  };

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    return true;
  }

  componentDidUpdate() {
    // Implemente sua lógica aqui
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
      <div>
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
