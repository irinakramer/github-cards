import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
// Github test usernames: gaearon, sophiebits, tj, bvaughn
// TO DO:
// Error handling at async await
// Convert from class to functional components
// Break out async await to a separate component
// 
const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
)

class Form extends React.Component {
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    //console.log(resp.data);
    this.setState({ userName: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={event => this.setState({ userName: event.target.value })} required />
        <button>Add card</button>
      </form>
    )
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <a href={profile.html_url} target="_blank"><img src={profile.avatar_url} /></a>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="login">{profile.login}</div>
          <div className="company">{profile.company}</div>
          <div className="repos">Public repos: {profile.public_repos}</div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //profiles: testData
      profiles: []
    }
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }
  render() {
    return (
      <div className="app">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

ReactDOM.render(<App title="The GitHub Cards App" />, document.querySelector('#root'));
