import axios from 'axios';

const BASE_URL = 'http://localhost:4200';
export const StandsService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/stands`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all stands:', error);
      throw error;
    }
  },

  getByPage: async (page, limit) => {
    try {
      const response = await axios.get(`${BASE_URL}/stands?_page=${page}&_limit=${limit}`, {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      return {
        stands: response.data,
        totalItems: parseInt(response.headers['x-total-count'], 10),
      };
    } catch (error) {
      console.error(`Error fetching stands for page ${page}:`, error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/stands?id=${id}`);
      return response.data[0];
    } catch (error) {
      console.error(`Error fetching stand with id ${id}:`, error);
      throw error;
    }
  },
};
