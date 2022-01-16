/**
 * @jest-environment node
 */

import {
    DEMO_HTML_LOWERCASE_1,
    DEMO_HTML_UPPERCASE_1,
    DEMO_HTML_EMPTY,
    DEMO_HTML_LOWERCASE_2,
    DEMO_HTML_UPPERCASE_2,
} from '../../mocks/demoHtml';
import { Parser } from './Parser';

describe('Parser', () => {
    test('should get title when <tag> is lowercase', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getTitle()).toEqual('Title');
    });
    test('should get title when <Tag> is uppercase', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_1);
        expect(parser.getTitle()).toEqual('Title');
    });
    test('should return undefined when there is no title', () => {
        const parser = new Parser(DEMO_HTML_EMPTY);
        expect(parser.getTitle()).toEqual(undefined);
    });

    test('should get description when <tag> is lowercase and value of name attribute is lowercase (name="value")', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getDescription()).toEqual('Description');
    });
    test('should get description when <tag> is lowercase and value of name attribute is uppercase (name="Value")', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_2);
        expect(parser.getDescription()).toEqual('Description');
    });
    test('should get description when <Tag> is uppercase and value of name attribute is uppercase (name="Value")', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_1);
        expect(parser.getDescription()).toEqual('Description');
    });
    test('should get description when <Tag> is uppercase and value of name attribute is lowercase (name="value")', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_2);
        expect(parser.getDescription()).toEqual('Description');
    });
    test('should return undefined when there is no description', () => {
        const parser = new Parser(DEMO_HTML_EMPTY);
        expect(parser.getDescription()).toEqual(undefined);
    });

    test('should get keywords when <tag> is lowercase and value of name attribute is lowercase (name="value")', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getKeywords()).toEqual(['Keyword1', 'Keyword2']);
    });
    test('should get keywords when <tag> is lowercase and value of name attribute is uppercase (name="Value")', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_2);
        expect(parser.getKeywords()).toEqual(['Keyword1', 'Keyword2']);
    });
    test('should get keywords when <Tag> is uppercase and value of name attribute is uppercase (name="Value")', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_1);
        expect(parser.getKeywords()).toEqual(['Keyword1', 'Keyword2']);
    });
    test('should get keywords when <Tag> is uppercase and value of name attribute is lowercase (name="value")', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_2);
        expect(parser.getKeywords()).toEqual(['Keyword1', 'Keyword2']);
    });
    test('should return undefined when there are no keywords', () => {
        const parser = new Parser(DEMO_HTML_EMPTY);
        expect(parser.getKeywords()).toEqual(undefined);
    });

    test('should return og:Image url', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getPreviewPhoto()).toEqual('https://www.google.com/og-image.png');
    });
    test('should return twitter:Image url', () => {
        const parser = new Parser(DEMO_HTML_UPPERCASE_1);
        expect(parser.getPreviewPhoto()).toEqual('https://www.google.com/twitter-image.png');
    });

    test('should return og:Image url', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getMetaImage('open-graph')).toEqual('https://www.google.com/og-image.png');
    });
    test('should return twitter:Image url', () => {
        const parser = new Parser(DEMO_HTML_LOWERCASE_1);
        expect(parser.getMetaImage('twitter')).toEqual('https://www.google.com/twitter-image.png');
    });
});
