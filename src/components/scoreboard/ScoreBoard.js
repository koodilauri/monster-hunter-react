import React from "react";

class ScoreBoard extends React.Component {
  state={
    times:[],
    timeInput: ""
  }
  componentDidMount() {
    this.props.getRuntimes()
    // .then(runtimes => {
    //   console.log(runtimes)
    // })
  }
  handleChange = (event) => {
    this.setState({
      timeInput:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    const newtime = this.state.timeInput;
    this.setState({
      times: [...this.state.times, newtime],
      timeInput:""
    })
  }
  render(){
    return(
      <div>
        <h1>scoreboard</h1>
        <div>
          { this.props.runtimes.map(time =>
            <p>{time.content}</p>
          ) }
        </div>
        <div>
          { this.state.times.map(time =>
            <p>{time}</p>
          ) }
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              value={this.state.timeInput}
              onChange={this.handleChange}
            />
            <label>time</label>
          </div>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

import { connect } from "react-redux";

import { getRuntimes } from "../../actions/runtime";

const mapStateToProps = (state) => {
  return {
    runtimes: state.runtime.runtimes,
    loading: state.runtime.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getRuntimes() {
    dispatch(getRuntimes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);