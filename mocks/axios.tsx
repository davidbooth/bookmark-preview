jest.mock('axios');
import axios from 'axios';

const mockedAxios = axios as jest.MockedObject<typeof axios>;
mockedAxios.get = jest.fn();

export default mockedAxios;
