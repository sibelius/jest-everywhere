class Incrementor extends React.Component {
  state = { number: 0 }

  increment = () => {
    this.setState({number: this.state.number + 1});
  }

  render() {
    return (
      <div>
        <h1>The Great Incrementor!</h1>

        <button onClick={this.increment}>Increment!</button>
        <span className="number">{this.state.number}</span>
      </div>
    );
  }
}
