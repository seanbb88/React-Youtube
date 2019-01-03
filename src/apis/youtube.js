import axios from 'axios'; 
const KEY = 'AIzaSyD0brpydTkSW0d2tk9T25UQUsXz783zi6g'

export default axios.create({
    baserURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY
    }
}); 