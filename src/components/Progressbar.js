import React, { Component } from 'react';
import styles from '../styles.css';

class Progressbar extends Component {
  constructor(props) {
    super(props);
    this.progress = React.createRef();
    this.state = {
      bar: 0
    };
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState({
        bar: (this.props.value * this.progress.current.offsetWidth) / 100
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({
        bar: nextProps.value
      });
    }
  }
  render() {
    const style = {
      bar: {
        width: `${this.state.bar}%`,
        backgroundColor: this.props.barColor ? this.props.barColor : 'green',
        height: '100%',
        transition: 'all 1s'
      },
      progress: {
        width: '100%',
        height: '100%',
        backgroundColor: this.props.progressColor
          ? this.props.progressColor
          : 'yellow'
      },
      progressValue: {
        color: this.props.progressValueColor
          ? this.props.progressValueColor
          : 'white',
        fontSize: this.props.progressValueSize
          ? this.props.progressValueSize
          : '16px',
        fontWeight: this.props.progressValueWeight
          ? this.props.progressValueWeight
          : '400'
      }
    };
    return (
      <div
        ref={this.progress}
        className={styles.progress}
        style={style.progress}
      >
        <div className={styles.bar} style={style.bar} />
        {this.props.withValue ? (
          <p className={styles.progressValue} style={style.progressValue}>
            {this.props.value}%
          </p>
        ) : null}
      </div>
    );
  }
}
export default Progressbar;
