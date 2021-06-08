import React from 'react';
import './App.css';
import RenderDog from './components/RenderDog';
import LoadingInfo from './components/LoadingInfo';

class App extends React.Component {
  constructor() {
    super()

    this.requestDog = this.requestDog.bind(this);

    this.state = {
      currentDog: '',
      dogList: [],
      isLoading: true,
    }
  }

  async requestDog() {
    this.setState(
      { isLoading: true, },
      async () => {
        await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          this.setState((previusState) => ({
            currentDog: data.message,
            dogList: [...previusState.dogList, data.message],
            isLoading: false,
          }))
        })
      }
    )
    localStorage.setItem('DogList', this.state.dogList)
  }

  componentDidMount() {
    this.requestDog()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { currentDog } = nextState

    if (currentDog) {
      let breeds = currentDog.split('s/')[1]
      breeds = breeds.split('/')[0]
      window.alert(`A raça desse cachorro é ${breeds}`)
    }

    if (currentDog.includes('terrier')) {
      window.alert('Ops, essa raça não pode ser renderizada! Atualize a página.')
      return false
    } else {
      return true
    }
  }

  render() {
    const { currentDog, isLoading } = this.state;

    return (
      <>
        { isLoading ? <LoadingInfo /> : <RenderDog requestDog={ this.requestDog } currentDog={ currentDog } /> }
      </>
    )
  }
}

export default App;
