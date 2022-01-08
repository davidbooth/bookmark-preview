/**
 * @jest-environment node
 */

import { WSAScraper, API_URL } from './WSAScraper';
import mockedAxios from '../../mocks/axios';

describe('WSAScraper', () => {
    test('should return html content', async () => {
        const mockResponse = { data: '<html></html>' };
        mockedAxios.get!.mockResolvedValueOnce(mockResponse);
        const expectedApiParams = {
            api_key: 'API-KEY',
            device: undefined,
            render_js: 0,
            screenshot: 0,
            timeout: undefined,
            url: 'https://google.com',
            wait_for: undefined,
            wait_until: undefined,
        };

        const scraper = new WSAScraper({ url: 'https://google.com' });
        const html = await scraper.getHTML();

        expect(mockedAxios.get).toHaveBeenCalledWith(API_URL, { params: expectedApiParams });
        expect(html).toEqual(mockResponse.data);
    });

    test('should return screenshot as base64 string', async () => {
        const mockResponse = { data: { screenshot: 'BASE64' } };
        mockedAxios.get.mockResolvedValueOnce(mockResponse);
        const expectedApiParams = {
            api_key: 'API-KEY',
            device: undefined,
            render_js: 1,
            screenshot: 1,
            timeout: undefined,
            url: 'https://google.com',
            wait_for: undefined,
            wait_until: undefined,
        };

        const scraper = new WSAScraper({ url: 'https://google.com' });
        const response = await scraper.getScreenshot();

        expect(mockedAxios.get).toHaveBeenCalledWith(API_URL, { params: expectedApiParams });
        expect(response).toEqual(mockResponse.data);
    });
});
