const axios = require('axios').default;

export const insert = (event) => {
    try{
        // console.log(event);
        axios.post("http://127.0.0.1:5000/register", event)
        .then(res => console.log(res))
    } catch (err) {
        console.error(err);
    }
}

export const getData = async () => {
    try{
       const res = await axios.get("http://127.0.0.1:5000/view");
       return res.data;
    } catch (err) {
        console.error(err);
    }
}

export const clearData = async () => {
    try{
        axios.get("http://127.0.0.1:5000/clear").then(console.log);
    } catch (err){
        console.error(err);
    }
}