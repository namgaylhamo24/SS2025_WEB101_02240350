import apiClient from '@/lib/axios';

export const uploadVideo = async (formData) => {
  try {
    const response = await apiClient.post('/videos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};