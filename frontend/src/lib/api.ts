import axios from 'axios';

export const processPhoto = async (photo: string, filmStock: string): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('filmStock', filmStock);
    const response = await axios.post('http://127.0.0.1:5000/processPicture', formData);
    return response.data.img;
  } catch (error) {
    console.error('Error processing photo:', error);
    throw new Error('Could not process photo');
  }
};
