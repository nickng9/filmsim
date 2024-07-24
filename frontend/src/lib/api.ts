// src/lib/api.ts
import axios from 'axios';

export const processPhoto = async (photo: string, filmStock: string): Promise<string> => {
  try {
    const response = await axios.post('/api/processPhoto', { photo, filmStock });
    return response.data.img;
  } catch (error) {
    console.error('Error processing photo:', error);
    throw new Error('Could not process photo');
  }
};
