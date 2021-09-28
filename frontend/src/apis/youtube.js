import axios from 'axios';
const KEY = 'AIzaSyBIADHPurjVcm5hAt54GCYTZ-c_bvN3ycY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params :{
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})