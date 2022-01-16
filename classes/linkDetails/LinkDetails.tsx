import { Parser } from '../parser/Parser';
import { Scraper } from '../scraper/Scraper';
import { WSAScraper } from '../scraper/WSAScraper';

export class LinkDetails {
    title: string | undefined;
    description: string | undefined;
    keywords: string[] | undefined;
    previewPhoto: string | undefined;
    screenshot: string | undefined;

    private url: string;
    private scraper: Scraper;

    constructor(url: string) {
        this.url = url;
        this.scraper = new WSAScraper({ url });
    }

    async produce(includeScreenshot = false) {
        if (includeScreenshot) {
            const screenshot = await this.scraper.getScreenshot();
            this.screenshot = screenshot.base64;
        }

        const html = await this.scraper.getHTML();
        const parser = new Parser(html);

        this.title = parser.getTitle();
        this.description = parser.getDescription();
        this.keywords = parser.getKeywords();
        this.previewPhoto = parser.getPreviewPhoto();
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            keywords: this.keywords,
            screenshot: this.screenshot,
            previewPhoto: this.previewPhoto,
            url: this.url,
        };
    }
}
