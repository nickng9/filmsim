import axios from "axios";

export const processPicture = async() => {
    try {
        const data = await axios.get('http://127.0.0.1:5000/processPicture');
        return data.data.picture
    } catch(err) {
        if (err) {
            return err
        }
    }
};
