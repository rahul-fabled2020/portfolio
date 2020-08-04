import React from "react";
import { connect } from "react-redux";

import * as apiActions from "./actions/apiActions";
import Header from "./components/Header";
import http from "./utils/http";
import Profile from "./components/Profile";
import Project from "./components/Project";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: "",
    };
  }

  componentDidMount() {
    Promise.all([http.get(), http.get("/repos")])
      .then(([userResponse, repoResponse]) => {
        this.props.fetchUser(userResponse);
        this.props.fetchRepos(repoResponse);
        this.setState(() => ({ isLoading: false }));
      })
      .catch((error) => this.setState(() => ({ error: error.message })));
  }

  render() {
    if (this.state.error) return <div>Error: {this.state.error}</div>;
    if (this.state.isLoading) return <div>Loading...</div>;

    return (
      <div className="app">
        <Header />
        <div className="container app__container">
          <div className="row">
            <div className="col-md-4 app__col">
              <Profile user={this.props.api.user} />
            </div>
            <div className="col-md-8">
              <div className="wrapper">
                <div className="bar">
                  Repositories ({this.props.api.user.public_repos})
                </div>
                <div className="app__projects">
                  {this.props.api.repos.map((repo, index) => (
                    <Project
                      key={index}
                      project={{
                        name: repo.name,
                        url: repo.html_url,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: (user) => dispatch(apiActions.fetchUserData(user)),
    fetchRepos: (repos) => dispatch(apiActions.fetchRepoData(repos)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
