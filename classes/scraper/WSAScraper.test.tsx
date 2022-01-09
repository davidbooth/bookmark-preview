/**
 * @jest-environment node
 */

import axios from 'axios';
import { WSAScraper, API_URL } from './WSAScraper';

jest.mock('axios');
const mockedGet = axios.get as jest.MockedFunction<typeof axios.get>;

describe('WSAScraper', () => {
    test('should return html and screenshot content', async () => {
        const mockHTMLResponse = { data: '<html></html>' };
        const mockScreenshotResponse = { data: { screenshot: 'BASE64' } };
        mockedGet.mockResolvedValueOnce(mockHTMLResponse);
        mockedGet.mockResolvedValueOnce(mockScreenshotResponse);
        const expectedScreenshot = {
            base64: `data:image/png;base64, ${mockScreenshotResponse.data.screenshot}`,
        };

        const scraper = new WSAScraper({ url: 'https://google.com' });
        const { html, screenshot } = await scraper.getHTMLAndScreenshot();

        expect(html).toEqual(mockHTMLResponse.data);
        expect(screenshot).toEqual(expectedScreenshot);
    });

    test('should return html content', async () => {
        const mockResponse = { data: '<html></html>' };
        mockedGet.mockResolvedValueOnce(mockResponse);
        const expectedApiParams = {
            api_key: undefined,
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

        expect(mockedGet).toHaveBeenCalledWith(API_URL, { params: expectedApiParams });
        expect(html).toEqual(mockResponse.data);
    });

    test('should return screenshot as base64 string', async () => {
        const mockResponse = { data: { screenshot: 'BASE64' } };
        mockedGet.mockResolvedValueOnce(mockResponse);
        const expectedApiParams = {
            api_key: undefined,
            device: undefined,
            render_js: 1,
            screenshot: 1,
            timeout: undefined,
            url: 'https://google.com',
            wait_for: undefined,
            wait_until: undefined,
        };
        const expectedResponse = {
            base64: `data:image/png;base64, ${mockResponse.data.screenshot}`,
        };

        const scraper = new WSAScraper({ url: 'https://google.com' });
        const response = await scraper.getScreenshot();

        expect(mockedGet).toHaveBeenCalledWith(API_URL, { params: expectedApiParams });
        expect(response).toEqual(expectedResponse);
    });
});
