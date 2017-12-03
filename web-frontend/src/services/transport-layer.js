import axios from 'axios';

let normal_inst = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
});

let flask_to_firebase = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 10000
});


// ////////////////////////////////////////////////////
// ///////////// GCS API FUNCTIONS /////////////
// ////////////////////////////////////////////////////

export const beginRecording = async () => {
    let responseData = await normal_inst.get('/SOMETHING');
    return responseData.data.results[0];
};

// ////////////////////////////////////////////////////
// ///////////// FIREBASE + FLASK API FUNCTIONS /////////////
// ////////////////////////////////////////////////////

export const getArticles = async () => {
    let responseData = await flask_to_firebase.get('/getAll');
    return responseData.data;
};