import React from 'react';
import $ from 'jquery';


class UserGithub extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    login: '',
    id: '',
    locate: '',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    login: data.login,
    id: data.id,
    locate: data.location,
    });
    }
    });
    }
    render() {
    return (
    <div>
    <img src={this.state.avatarUrl} /><br/>
    <h3>user name:{this.state.username}</h3>
    <a href={this.state.githubtUrl}>Github Link</a>
    <h3>location:{this.state.locate}</h3>
    <h3>login:{this.state.login}</h3>
    <h3>id:{this.state.id}</h3>
    </div>
    );
    }
   }
//    ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/cjwu" />,
//     document.getElementById('root')
//    );
   export default UserGithub;
   