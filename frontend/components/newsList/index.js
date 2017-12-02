import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native';
import NewsListItem from '../newsListItem';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon, Fab} from 'native-base';
import FooterTabs from '../footerTabs';
import styles from './styles'
import { getBills } from '../../stores/appState'

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    _showModal = () => this.setState({ visible: true });
    _hideModal = () => this.setState({ visible: false });

    render() {
        return (
            <Container style={styles.container}>
                {/*<Modal visible={this.state.visible}>*/}
                    {/*<Text>Example Modal</Text>*/}
                {/*</Modal>*/}
                <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                    <Left>
                        {/*<Button transparent*/}
                        {/*onPress={() => {console.log("menu")}}>*/}
                        {/*<Image source={require('../../images/Menu.png')} style={styles.menuButton}/>*/}
                        {/*</Button>*/}
                    </Left>
                    <Body>
                        <Text style={styles.title}>News</Text>
                    </Body>
                    <Right>
                        {/*<Button transparent*/}
                        {/*onPress={() => {console.log("open drawer")}}>*/}
                        {/*<Icon name='md-search' style={{fontSize: 24, color: "white"}}/>*/}
                        {/*</Button>*/}
                    </Right>
                </Header>
                <Content>
                    {
                        props.appState.bills.map((bill) => {
                            return (
                                <NewsListItem news={bill} key={bill.uid}/>
                            )
                        })
                    }

                </Content>
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: "#5cb85c"}}
                    position="bottomRight"
                    onPress={() => {
                        this.openModal()
                    }}>
                    <Icon name="ios-add"/>
                </Fab>
                {/*<FooterTabs/>*/}
            </Container>
        )
    }
};

export default inject("appState")(observer(NewsList));