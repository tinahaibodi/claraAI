import axios from "axios";

let normal_inst = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
});


// ////////////////////////////////////////////////////
// ///////////// GCS FUNCTIONS ////////////////////////
// ////////////////////////////////////////////////////

export const reportScore = async (bool, uid) => {
    let responseData = await normal_inst.post('/feedback', { feedback: bool, objUid: uid });
    return responseData.data.results[0];
};

// ////////////////////////////////////////////////////
// ///////////// FLASK API FUNCTIONS /////////////
// ////////////////////////////////////////////////////

export const sendLinkFlask = async (url) => {
    let responseData = await normal_inst.post('/feedback', { url: url });
    return responseData.data.results[0];
};
