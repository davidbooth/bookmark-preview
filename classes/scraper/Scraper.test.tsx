/**
 * @jest-environment node
 */

import { ScraperBase } from './Scraper';

describe('ScraperBase', () => {
    let scraper: ScraperBase;

    beforeEach(() => {
        scraper = new ScraperBase();
    });

    test('should allow a valid http url', () => {
        expect(() => {
            scraper.validateUrl('http://www.google.com/');
        }).not.toThrow();
    });

    test('should allow a valid https url', () => {
        expect(() => {
            scraper.validateUrl('https://www.google.com/');
        }).not.toThrow();
    });

    test('should throw error if provided url is not valid', () => {
        expect(() => {
            scraper.validateUrl('Not a url');
        }).toThrowError('Url is invalid.');
    });

    test('should throw error for invalid protocols', () => {
        expect(() => {
            scraper.validateUrl('file://www.google.com/');
        }).toThrowError('Url Protocol needs to be http or https.');
    });
});
