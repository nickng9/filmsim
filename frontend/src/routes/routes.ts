import axios from "axios";

export const processPicture = async(file: File) => {
    try {
        console.log(file);
        // const body = {
        //     picture: file,
        //     filmStock: 'Fuji',
        //     iso: '400'
        // }
        const formData = new FormData();
        formData.append('picture', file);
        formData.append('filmStock', 'Fuji')
        formData.append('iso', '400')

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
