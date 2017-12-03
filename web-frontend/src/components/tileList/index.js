import React, { Component } from 'react';
import { Card, Button, Row } from 'antd'
import ClaraMain from '../claraMain'
import TileListItem from '../tileListItem';
import { inject, observer } from 'mobx-react';

@inject("appState") @observer
export default class TileList extends Component {

    render() {
        console.log("props.home", this.props.home)
        return (
            <Row gutter={16} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    this.props.appState.news.map((article) => {
                        return (<TileListItem article={article} key={article.uid} homeStyle={this.props.home} loading={this.props.loading}/>)
                    })
                }
            </Row>
        );
    }
}