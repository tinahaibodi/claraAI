import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import { sendFax } from '../../services/transport-layer';
import Slider from 'react-native-slider';
import { Container, Title, Subtitle, Icon, Right, Text, Body, ScrollableTab, Header, Tabs, Tab, Button, Left } from 'native-base';
import Popup from 'react-native-popup';
import styles from './styles';

@inject("appState") @observer
export default class NewsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.news.score
        }
    }

    @action
    userFeedback = async (bool) => {
        return this.props.appState.userFeedback(bool, this.props.news)
    };

    onPressHandle() {
        // alert
        this.popup.alert(1);
    },

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                    <Left>
                        <Button transparent
                                title="back-transactions"
                                onPress={() => {
                                    Actions.pop()
                                }}>
                            <Icon ios="md-arrow-back" android="md-arrow-back" style={styles.backArrow}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>{this.props.news.title}</Title>
                        <Subtitle style={styles.subheading}>{this.props.news.source}</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <View>
                    <ScrollView>

                        {/*<View>*/}
                            {/*{this.props.bill.summary ? <Text>{this.props.bill.summary}</Text> : <Text>No Summary! Check back in a few days while we write it</Text>}*/}
                        {/*</View>*/}

                        <View style={styles.sliderContainer}>
                            <Slider
                                value={this.state.value}
                                onValueChange={value => this.setState({ value })}
                            />
                            <Text>
                                Value: {this.state.value}
                            </Text>
                        </View>


                        {   this.props.news.feedback ?
                            <View></View> :
                            <View
                                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <View>
                                    <Button rounded success x-large
                                            style={{height: 70, width: 70, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                this.onPressHandle.bind(this)
                                                // this.userFeedback(true)
                                            }}>

                                        <Icon name='checkmark' style={{fontSize: 50}}/>
                                    </Button>
                                    <Popup ref={popup => this.popup = popup }/>
                                </View>
                                <View>
                                    <Button rounded danger x-large
                                            style={{height: 70, width: 70, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                this.userFeedback(false)
                                            }}>
                                        <Icon name='close' style={{fontSize: 50}}/>
                                    </Button>
                                </View>
                            </View>
                        }
                    </ScrollView>
                </View>
            </Container>
        )
    }
};