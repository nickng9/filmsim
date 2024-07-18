import axios from 'axios';

export const processRequest = async(formData: any) => {
    try {
        console.log(formData);

        const data = await axios.post('http://127.0.0.1:5000/processPicture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }});
        console.log(data.data);
        return data.data
    } catch(err) {
        if (err) {
            return err
        }
    }
};
