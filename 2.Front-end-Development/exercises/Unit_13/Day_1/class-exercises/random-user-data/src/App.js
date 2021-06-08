import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.requestRandomUser = this.requestRandomUser.bind(this);
    this.renderRandomUser = this.renderRandomUser.bind(this);

    this.state = {
      randomUser: [],
      isLoading: true,
    }

    console.log('constructor')
  }

  async requestRandomUser() {
    this.setState(
      {},
      async () => {
        await fetch('https://api.randomuser.me/')
        .then(response => response.json())
        .then(data => this.setState({ randomUser: data.results }))

        this.setState({
          isLoading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.requestRandomUser();
  }

  renderRandomUser() {
    const { randomUser } = this.state;

    return randomUser.map((user) => {
      return (
        <div>
          <h2>Random User</h2>
          <img src={ user.picture.large } alt={`${ user.name.first }`} />
          <p>Name: {`${ user.name.title }. ${ user.name.first } ${ user.name.last }`} </p>
          <p>Email: { user.email } </p>
          <p>Age: {`${ user.registered.age } years`} </p>
          <span>Reload to change user.</span>
        </div>
      )
    });
  }

  loading() {
    return (
      <p>Loading...</p>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        { isLoading ? this.loading() : this.renderRandomUser() }
      </>
    );
  }
}

export default App;
