import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.component';
import TasksPage from './pages/tasks/tasks.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();


    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/tasks' component={TasksPage} />
          <Route path='/signin' component={SignInAndSignUp} />

        </Switch>
      </div>
    );
  }

}

export default App;