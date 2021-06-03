import React from 'react';
import './App.css';
import FullName from './fullName';
import EmailInfo from './emailInfo';
import SelectedRegion from './selectedRegion';
import HistorySummary from './historySummary';
import ProfilePhoto from './profilePhoto';
import UserTerms from './userTerms';
import SendBtn from './sendBtn';

class App extends React.Component {
  constructor() {
    super()

    this.changeInfo = this.changeInfo.bind(this);

    this.state = {
      fullName: '',
      email: '',
      selectedRegion: '',
      historySummary: '',
      userTerms: false,
    }

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  changeInfo({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target

    this.setState(({
      [name]: value,
    }))
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <FullName changeInfo={this.changeInfo} />
            <EmailInfo changeInfo={this.changeInfo} />
            <SelectedRegion changeInfo={this.changeInfo} />
          </fieldset>
          <fieldset>
            <HistorySummary changeInfo={this.changeInfo} historySummaryValue={this.state.historySummary} />
            <ProfilePhoto handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
            <UserTerms changeInfo={this.changeInfo} />
          </fieldset>
            <SendBtn userTermsInfo={this.state.userTerms}/>
        </form>
      </div>
    );
  }
}

export default App;
