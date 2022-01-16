/**
 * @jest-environment node
 */
import { LinkDetails } from './LinkDetails';
import { DEMO_HTML_LOWERCASE_1 } from '../../mocks/demoHtml';

const mockGetScreenshot = jest.fn();
const mockGetHTML = jest.fn();
jest.mock('../scraper/WSAScraper', () => {
    return {
        WSAScraper: jest.fn().mockImplementation(() => {
            return {
                getScreenshot: mockGetScreenshot,
                getHTML: mockGetHTML,
            };
        }),
    };
});

describe('LinkDetails', () => {
    test('should produce title, description, keywords and screenshot', async () => {
        mockGetScreenshot.mockResolvedValue({
            base64: 'screenshot-content',
        });

        mockGetHTML.mockResolvedValue(DEMO_HTML_LOWERCASE_1);

        const details = new LinkDetails('https://google.com');
        await details.produce(true);

        expect(mockGetScreenshot).toHaveBeenCalledTimes(1);
        expect(mockGetHTML).toHaveBeenCalledTimes(1);

        expect(details.toJSON()).toEqual({
            title: 'Title',
            description: 'Description',
            keywords: ['Keyword1', 'Keyword2'],
            screenshot: 'screenshot-content',
            previewPhoto: 'https://www.google.com/og-image.png',
            url: 'https://google.com',
        });
    });

    test('should return a limited json object', () => {
        const details = new LinkDetails('https://google.com');
        const json = details.toJSON();

        expect(json).toEqual({
            title: undefined,
            description: undefined,
            keywords: undefined,
            screenshot: undefined,
            previewPhoto: undefined,
            url: 'https://google.com',
        });

        expect(Object.keys(json).length).toEqual(6);
    });
});
