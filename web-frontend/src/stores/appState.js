import { observable, action } from 'mobx';
import { beginRecording, getArticles } from '../services/transport-layer';

class AppState {
    @observable news = [];

    @observable loading = false;

    initiateRecording = async () => {
        return await this.beginRecording()
    };

    @action
    getNews = async () => {
        let res = await getArticles();
        let jsonList = [];
        let keys = Object.keys(res);
        console.log("keys", keys)
        for (let i=0; i<keys.length; i++) {
            let key = keys[i];
            console.log("key", key)
            let val = res[key];
            console.log("value", val)
            val["uid"] = key;
            console.log("modified value", val)
            jsonList.push(val)
        }

        this.news = jsonList;
    };
}

export default new AppState()