import React, { Component } from 'react';
import { Card, Tag, Col } from 'antd'
import { inject, observer } from 'mobx-react';

@inject("appState") @observer
export default class TileListItem extends Component {
    constructor(props){
        super(props);
        this.keywords = this.props.article.key_word.map((word) => {
            return(<Tag color={this.props.article.political_leaning === "conservative" ? "#de4a00" : "#108ee9"} style={{margin: 1}}>{word}</Tag>)
        })
    }

    render() {
        return (
            <Col className="gutter-row" span={12}>                {
                    this.props.loading ?
                    <Card loading title="Loading" style={this.props.homeStyle ? { width: '34%', margin: 15} : { width: '34%', margin: 15}}/>
                    :
                    <Card title={this.props.article.title} style={this.props.homeStyle ? { marginTop: 0, margin: 15, display: "incline-block", fontSize: "large"} : { marginTop: 0, margin: 15}}>
                        <p style={{
                            fontSize: "small",
                            fontWeight: 500,
                            marginTop: -12,
                            marginBottom: 5
                        }}>{String(this.props.article.authors).toUpperCase()}</p>
                        <div>
                            <img alt="" width="100%" src={this.props.article.image_url} />
                        </div>
                        <div>
                            {this.keywords}
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <p style={{fontSize: "large", fontWeight: 600}}>Sentiment Score</p>
                            <p style={{fontSize: "large"}}>{this.props.article.sentiment_score < 0 ? parseInt((this.props.article.sentiment_score / -4) * 100) : parseInt((this.props.article.sentiment_score / 4) * 100)}</p>
                            <p style={this.props.article.political_leaning === "conservative" ? {color: "#de4a00", fontSize: "large", fontWeight: 600} : {color: "#108ee9", fontSize: "large", fontWeight: 600}}>{String(this.props.article.political_leaning[0]).toUpperCase() + String(this.props.article.political_leaning).slice(1)}</p>
                            <p style={this.props.article.political_leaning === "conservative" ? {color: "#de4a00", fontSize: "large"} : {color: "#108ee9", fontSize: "large"}}>{this.props.article.political_confidence < 0.5 ? parseInt((this.props.article.political_confidence / 0.5) * 100) :  parseInt((this.props.article.political_confidence) * 100)} / 100</p>
                        </div>
                    </Card>
                }
            </Col>
        );
    }
}