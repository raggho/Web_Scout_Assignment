// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { Component } from 'react'
// import { Link } from 'react-router'

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       checked: false
//     }
//   }

//   checkedClick () {
//     this.setState({checked: !this.state.checked})
//     console.log('chcekedClick')
//   }

//   componentDidUpdate () {
//     console.log('componentDidUpdate')
//     const { myCheckbox } = this.refs
//     console.log('myCheckbox', myCheckbox)
//     console.log('myCheckbox.name', myCheckbox.name)
//     console.log('myCheckbox.checked', myCheckbox.checked)
//     if (this.props.selecetedAllEmails) {
//       console.log('componentDidUpdate IF')
//       this.checkedClick()
//       this.props.handleSelectedEmails(myCheckbox.name, myCheckbox.checked)
//     }
//   }
//   render () {
//     console.log('_id', this.props.id)
//     return (
//       <tr>
//         <td><input ref="myCheckbox"
//           onChange={(event) => {
//             this.checkedClick()
//             this.props.handleSelectedEmails(event.target.name, event.target.checked)
//           }}
//           checked={this.state.checked}
//           type="checkbox" name={this.props.id} /></td>
//         <td><Link to={this.props.link}>{this.props.name}</Link></td>
//         <td>{this.props.createdAt}</td>
//         <td>Open Rates</td>
//         <td>CTA</td>
//       </tr>
//     )
//   }
// }

// export default App;
import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["One", "Two", "Three","Four","Five"];

class App extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2 ">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2 botton5"
                  onClick={this.selectAll}
                >
                  Help Me </button>
                
               
               <button
                  type="button"
                  className="btn btn-outline-primary mr-2 botton5"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;