import { useEffect, useRef, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('This is interval every second ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('This is method before component unmount');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

// export class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('This is interval every second ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('This is method before component unmount');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div>
//         <p>Current time: {this.state.time.toLocaleTimeString()}</p>
//         <button type="button" onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     );
//   }
// }
