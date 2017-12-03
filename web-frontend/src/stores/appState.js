import { observable, action } from 'mobx';
import news from '../data/news'
import { beginRecording, getArticles } from '../services/transport-layer';

class AppState {
    @observable news = news;

    @observable loading = false;

    initiateRecording = async () => {
        return await this.beginRecording()
    };

    @action
    getNews = async () => {
        return await getArticles()
    };
}

export default new AppState()