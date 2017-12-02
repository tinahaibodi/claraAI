import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left, Button } from 'native-base';
import { sendFax } from '../../services/transport-layer';
import styles from './styles';

@inject("appState") @observer
export default class NewsListItem extends Component {

    render() {
        return (
            <ListItem onPress={() => {Actions.billPage({news: this.props.news})}} style={styles.container}>
                <Body style={styles.listItemBody}>
                    <Text style={styles.listItemTitle}>{this.props.news.title}</Text>
                    <Text style={styles.subheading}>{this.props.news.source}</Text>
                </Body>
                <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <View>
                        <Text style={styles.amount}>{this.props.news.score}</Text>
                        <Text style={styles.subheading}>Bias</Text>
                    </View>
                </Right>
                <Right style={{marginLeft: -25}}>

                </Right>
            </ListItem>
        )
    }
};