import axios from 'axios';

export const processPhotos = async(formData: any) => {
    try {
        const data = await axios.post('http://127.0.0.1:5000/processPicture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }});
        return data.data
    } catch(err) {
        if (err) {
            return err
        }
    }
};