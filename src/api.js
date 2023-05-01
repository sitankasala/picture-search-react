import axios from 'axios'

const searchImages = async (searchString)=> {
 const response = await axios.get("https://api.unsplash.com/search/photos",{
     headers:{
         'Accept-Version': 'v1',
        Authorization: 'Client-ID 17wycWNls0Q5v8q_mBS0a-CKVy9FjnBM4sDdNS-_qCY'
     },
     params:{
        query: searchString
     }
 });
    return response.data.results;
}
export default searchImages;