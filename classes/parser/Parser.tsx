import { JSDOM } from 'jsdom';
import { Link } from '../link/Link';

export class Parser {
    private dom: JSDOM;
    private document: Document;

    constructor(html: string) {
        this.dom = new JSDOM(html);
        this.document = this.dom.window.document;
    }

    getTitle(): string | undefined {
        return this.document.querySelector('title')?.text;
    }

    getDescription(): string | undefined {
        return this.document.querySelector<HTMLMetaElement>('meta[name="description" i]')?.content;
    }

    getKeywords(): string[] | undefined {
        const keywordText =
            this.document.querySelector<HTMLMetaElement>('meta[name="keywords" i]')?.content;

        if (!keywordText) {
            return undefined;
        }

        return keywordText.split(',').map((keyword) => keyword.trim());
    }

    getPreviewPhoto(): string | undefined {
        const ogImage = this.getMetaImage('open-graph');
        const twitterImage = this.getMetaImage('twitter');

        return ogImage || twitterImage;
    }

    getMetaImage(type: 'open-graph' | 'twitter'): string | undefined {
        const query =
            type === 'open-graph' ? 'meta[property="og:image" i]' : 'meta[name="twitter:image" i]';

        const imageUrl = this.document.querySelector<HTMLMetaElement>(query)?.content;

        if (imageUrl && Link.isValid(imageUrl)) {
            return imageUrl;
        }
    }
}
