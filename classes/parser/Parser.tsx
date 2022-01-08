import { JSDOM } from 'jsdom';

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
}
