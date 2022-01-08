/**
 * @jest-environment node
 */
import { LinkDetails } from './LinkDetails';
import { DEMO_HTML_LOWERCASE_1 } from '../../mocks/demoHtml';

const mockGetHTMLAndScreenshot = jest.fn();
jest.mock('../scraper/WSAScraper', () => {
    return {
        WSAScraper: jest.fn().mockImplementation(() => {
            return {
                getHTMLAndScreenshot: mockGetHTMLAndScreenshot,
            };
        }),
    };
});

describe('LinkDetails', () => {
    test('should produce title, description, keywords and screenshot', async () => {
        mockGetHTMLAndScreenshot.mockResolvedValue({
            html: DEMO_HTML_LOWERCASE_1,
            screenshot: { base64: 'screenshot-content' },
        });

        const details = new LinkDetails('https://google.com');
        await details.produce();

        expect(mockGetHTMLAndScreenshot).toHaveBeenCalledTimes(1);

        expect(details.toJSON()).toEqual({
            title: 'Title',
            description: 'Description',
            keywords: ['Keyword1', 'Keyword2'],
            screenshot: 'screenshot-content',
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
            url: 'https://google.com',
        });

        expect(Object.keys(json).length).toEqual(5);
    });
});
