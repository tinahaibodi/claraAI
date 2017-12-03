import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './components/homeScreen';
import HistoryScreen from './components/historyScreen';
import appState from './stores/appState';
import { Provider} from "mobx-react";
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {

    componentWillMount = async () => {
        await appState.getNews()
    };

  render() {
    return (
        <Provider appState={appState}>
            <Router>
                <div>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/history" component={HistoryScreen}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
