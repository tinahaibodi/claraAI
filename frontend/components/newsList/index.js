import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native';
import NewsListItem from '../newsListItem';
import { View } from 'react-native';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon, Fab, Item, Input} from 'native-base';
import FooterTabs from '../footerTabs';
import { DialogComponent } from 'react-native-dialog-component';
import Modal from 'react-native-modalbox';
import styles from './styles'
import { getBills } from '../../stores/appState'
import { sendLinkFlask } from '../../services/transport-layer';

@observer @inject("appState")
export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            swipeToClose: true,
            sliderValue: 0.3,
            inputVal: ""
        };
    }

    handleInputChange = (val) => {
        this.setState({isOpen: this.state.isOpen, swipeToClose: this.state.swipeToClose, sliderValue: this.state.sliderValue, inputVal: val})
    };

    sendLink = async () => {
        try {
            let res = await sendLinkFlask(this.state.inputVal);
            this.setState({isOpen: false, swipeToClose: this.state.swipeToClose, sliderValue: this.state.sliderValue, inputVal: ""})
        } catch (e) {
            this.setState({isOpen: false, swipeToClose: this.state.swipeToClose, sliderValue: this.state.sliderValue, inputVal: ""})
        }
    };

    render() {
        return (
            <Container style={styles.container}>
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
                        this.props.appState.bills.map((bill) => {
                            return (
                                <NewsListItem news={bill} key={bill.uid}/>
                            )
                        })
                    }
                    {/*<DialogComponent*/}
                        {/*ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}*/}
                    {/*>*/}
                        {/*<View>*/}
                            {/*<Text>Hello</Text>*/}
                        {/*</View>*/}
                    {/*</DialogComponent>*/}
                    <Modal style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 180,
                        width: 300
                    }} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                        <Item regular>
                            <Input
                                placeholder="Give me a link!"
                                onChangeText={(val) => {this.handleInputChange(val)}}
                                multiline={false}
                                style={{flex:0.8}}
                                // autofocus={true}
                            />
                        </Item>
                        <Button rounded
                                onPress={() => {this.sendLink()}}
                                style={{marginLeft: 100, marginTop: 20, backgroundColor: "#1A2D41"}}>
                            <Text>Analyze</Text>
                        </Button>
                    </Modal>
                </Content>
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: "#5cb85c"}}
                    position="bottomRight"
                    onPress={() => {
                        this.refs.modal3.open()
                    }}>
                    <Icon name="ios-add"/>
                </Fab>
                {/*<FooterTabs/>*/}
            </Container>
        )
    }
};
