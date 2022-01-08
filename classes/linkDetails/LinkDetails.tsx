import { Parser } from '../parser/Parser';
import { Scraper } from '../scraper/Scraper';
import { WSAScraper } from '../scraper/WSAScraper';

export class LinkDetails {
    title: string | undefined;
    description: string | undefined;
    keywords: string[] | undefined;
    screenshot: string | undefined;

    private url: string;
    private scraper: Scraper;

    constructor(url: string) {
        this.url = url;
        this.scraper = new WSAScraper({ url });
    }

    async produce() {
        const { html, screenshot } = await this.scraper.getHTMLAndScreenshot();
        const parser = new Parser(html);

        this.title = parser.getTitle();
        this.description = parser.getDescription();
        this.keywords = parser.getKeywords();
        this.screenshot = screenshot.base64;
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            keywords: this.keywords,
            screenshot: this.screenshot,
            url: this.url,
        };
    }
}
