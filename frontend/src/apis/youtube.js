import axios from 'axios';
const KEY = 'AIzaSyDmc6eBCwM7l3_9NrQIfz7bjV6VdmVgzoI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params :{
        part: 'snippet',
        maxResults: 1,
        order: 'viewCount',
        topicId: '/m/02wbm',
        type: 'video',
        safeSearch: 'strict',
        key: KEY
    }
})