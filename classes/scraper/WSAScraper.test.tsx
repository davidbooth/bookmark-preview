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
            url: 'SITE-URL',
            wait_for: undefined,
            wait_until: undefined,
        };

        const scraper = new WSAScraper('API-KEY');
        const html = await scraper.getHTML({ url: 'SITE-URL' });

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
            url: 'SITE-URL',
            wait_for: undefined,
            wait_until: undefined,
        };

        const scraper = new WSAScraper('API-KEY');
        const response = await scraper.getScreenshot({ url: 'SITE-URL' });

        expect(mockedAxios.get).toHaveBeenCalledWith(API_URL, { params: expectedApiParams });
        expect(response).toEqual(mockResponse.data);
    });
});
