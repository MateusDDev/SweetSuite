import axios from 'axios';
import useLocalStorage from './useLocalStore';

const LINK = 'http://localhost:5000/users';

function useUsers() {
  const [token] = useLocalStorage('token', '');

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(LINK, { headers });
      return data;
    } catch (error) {
      return error;
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${LINK}/id`, { headers });
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    getUsers,
    getUser,
  };
}

export default useUsers;
