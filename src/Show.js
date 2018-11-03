import React from "react";
// import shows from "./shows.json";

class Title extends React.Component {
  render() {
    return (
      <h1>
        Title:
        {this.props.showTitle}
      </h1>
    );
  }
}

class Poster extends React.Component {
  render() {
    return (
      <img
        src={this.props.showPoster}
        alt="1st Poster"
        style={{ height: 100, width: 100 }}
      />
    );
  }
}

class ShowInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Plot: {this.props.showPlot}</p>
        <h3>IMDB: {this.props.imdbRating}</h3>
      </div>
    );
  }
}

class Show extends React.Component {
  static defaultProps = {
    showIndex: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      showIndex: this.props.showIndex
    };
  }
  nextShowBtn() {
    const totalShow = this.props.shows.length;
    this.setState(function(prevState) {
      return {
        showIndex: (prevState.showIndex + 1) % totalShow
      };
    });
  }
  render() {
    const show = this.props.shows[this.state.showIndex];
    return (
      <div className="text-center">
        <Title showTitle={show.title} />
        <Poster showPoster={show.poster} />
        <ShowInfo showPlot={show.plot} imdbRating={show.imdbRating} />
        <button onClick={this.nextShowBtn.bind(this)}>Next Show</button>
      </div>
    );
  }
}

export default Show;
