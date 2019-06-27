// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


// import React, {Component, Fragment, useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//
//   upCounter = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//
//   downCounter = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1
//       }
//     })
//   }
//
//   resetCounter = () => {
//     this.setState((prevState) => {
//       return {
//         count: 0
//       }
//     })
//   }
//
//   render() {
//     return (
//         <Fragment>
//           <button onClick={this.upCounter}>Click +</button>
//           <button onClick={this.downCounter}>Click -</button>
//           <button onClick={this.resetCounter}>Reset</button>
//           <p>Hello {this.state.count}</p>
//         </Fragment>
//     )
//   }
// }
//
// export default App;

import React, {Component, Fragment, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App () {

  const [count, setCount] = useState(0);


  const upCounter = () => {
    setCount(count+1)
  }

  const  downCounter = () => {
    setCount(count-1)
  }

  const resetCounter = () => {
    setCount(0)
  }


    return (
        <Fragment>
          <button onClick={upCounter}>Click +</button>
          <button onClick={downCounter}>Click -</button>
          <button onClick={resetCounter}>Reset</button>
          <p>Hello {count}</p>
        </Fragment>
    )

}

export default App;