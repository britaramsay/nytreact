import axios from "axios";

export default {
    saveArticle: function (articleData) {  
        return axios.post('/api/articles', articleData)
    }
}