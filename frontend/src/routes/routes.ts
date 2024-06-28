import axios from "axios";

export const processPicture = async() => {
    try {
        const data = await axios.get('/processPicture');
        return data
    } catch(err) {
        if (err) {
            return err
        }
    }
};
