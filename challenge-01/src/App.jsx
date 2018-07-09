import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Post from "./components/Post/Post";
import faker from "faker";
import "./assets/styles/App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const posts = [];

    for (let i = 0; i < 3; i++) {
      posts.push({
        header: {
          avatar: faker.image.avatar(),
          name: faker.name.findName(),
          timeInMinutes: faker.random.number({ min: 1, max: 10 })
        },
        description: faker.lorem.paragraphs(3)
      });
    }

    this.setState({ posts: posts });
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
