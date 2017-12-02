import React from 'react';
import NewsList from './components/newsList';
import NewsPage from './components/newsPage';
import { Provider } from 'mobx-react/native';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {

    render() {
        return (
            <Provider appState={appState} donationStore={donationStore}>
                <Router>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billList" component={NewsList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billPage" component={NewsPage}/>
                    </Scene>
                </Router>
            </Provider>
        );
      }
}

