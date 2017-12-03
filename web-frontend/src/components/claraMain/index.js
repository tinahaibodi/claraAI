import React, { Component } from 'react';
import { Card, Button } from 'antd'
import { inject, observer } from 'mobx-react';

@inject("appState") @observer
export default class ClaraMain extends Component {

    startRecording = async () => {
        console.log("recording")
        this.props.appState.loading = true;
        let res = await this.props.appState.initiateRecording()
        setTimeout(function(){console.log("5 seconds have passed")}, 5000);
        this.props.appState.loading = false;
        return res
    };

    render() {
        return (
        <Card style={{ marginTop: 0, margin: 15, fontSize: "large", display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", width: 100}} >
                <img src="https://ph-files.imgix.net/af1f025c-dc64-4316-9d30-494227fe9762?auto=format&codec=mozjpeg&cs=strip&w=315&h=315" alt="" width="75%" height="75%"/>
            </div>
            <Button shape="circle" loading={this.props.appState.loading} style={{width: 45, height: 45, marginLeft: 27, marginTop: 20}} onPress={() => {this.startRecording()}}>
                <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/mic.png" alt="" width="75%" height="75%"/>
            </Button>
        </Card>
        );
    }
}