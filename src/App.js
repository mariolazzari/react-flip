import React, { Component } from "react";
import Article from "./Article";
import FlipMotion from "react-flip-motion";

class App extends Component {
  state = {
    articles: [
      { id: "a", text: "articolo uno" },
      { id: "b", text: "articolo due" },
      { id: "c", text: "articolo tre" },
      { id: "d", text: "articolo quattro" }
    ],
    intervalId: setInterval(() => this.sortRotate(), 1000)
  };

  sortRotate() {
    const articles = this.state.articles.slice();
    articles.push(articles.shift());
    this.setState({ articles });
  }

  startRotate() {
    const intervalId = setInterval(() => this.sortRotate(), 1000);
    this.setState({ intervalId });
  }

  stopRotate() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ intervalId: -1 });
  }

  render() {
    const { articles } = this.state;

    return (
      <div style={{ position: "relative" }}>
        <button onClick={() => this.startRotate()}>Start</button>
        <button onClick={() => this.stopRotate()}>Stop</button>

        <FlipMotion staggerDurationBy="30" duration={500}>
          {articles.map(item => (
            <Article key={item.id} article={item} />
          ))}
        </FlipMotion>
      </div>
    );
  }
}

export default App;
