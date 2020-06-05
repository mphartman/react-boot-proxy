import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('/api?name=Michael')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
