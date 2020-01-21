import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import React, { Component } from 'react'
// import App from './App'
// import { createContainer } from 'meteor/react-meteor-data'
// import { Emails } from '../../../../../imports/collections/emails/Emails'

// class EmailList extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       selectedEmails: new Set(),
//       checked: false
//     }
//   }

//   handleSelectedEmails (selectedEmail, checked) {
//     let selectedEmails = this.state.selectedEmails
//     if (checked) {
//       selectedEmails.add(selectedEmail)
//     } else {
//       selectedEmails.delete(selectedEmail)
//     }
//     this.setState({selectedEmails})
//     console.log('selectedEmails', this.state.selectedEmails)
//   }
//   removeSelected () {
//     const selectedEmails = Array.from(this.state.selectedEmails)
//     Meteor.call('emails.remove', selectedEmails, (err, result) => {
//       if (err) console.log(err)
//       if (result) console.log(result)
//     })
//   }
//   checkedClick () {
//     this.setState({checked: !this.state.checked})
//     console.log('chcekedClick')
//   }
//   renderList () {
//     console.log(this.props)
//     return this.props.emails.map(email => {
//       console.log(email)
//       const { name, opr, ctr, _id } = email
//       const createdAt = email.createdAt.toDateString()
//       const link = `/dashboard/emailpreview/${_id}`
//       return (
//         <EmailListItem selecetedAllEmails={this.state.checked}
//           handleSelectedEmails={this.handleSelectedEmails.bind(this)}
//           name={name}
//           createdAt={createdAt}
//           opr={opr}
//           ctr={ctr}
//           link={link}
//           key={email._id}
//           id={email._id} />
//         )
//     })
//   }
//   render () {
//     // TODO: make checks with state
//     return (
//       <div className="email_list">
//         <table>
//           <thead>
//             <tr>
//               <td><input onChange={this.checkedClick.bind(this)} type="checkbox" checked={this.state.checked} /></td>
//               <td>Title<button onClick={this.removeSelected.bind(this)} className="btn btn-danger">Remove</button></td>
//               <td>Dates</td>
//               <td>Open Rates</td>
//               <td>CTA</td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.renderList()}
//           </tbody>
//         </table>

//       </div>
//   )
//   }
// }

// export default createContainer(() => {
//   Meteor.subscribe('emails')
//   return { emails: Emails.find({}).fetch() }
// }, EmailList)
