import { RequestError } from '../error/Error';

export interface ScrapeRequestConfig {
    url: string;
    device?: 'desktop' | 'mobile' | 'tablet';
    waitUntilEvent?: 'domcontentloaded' | 'networkidle2';
    renderJavascript?: boolean;
    delay?: number;
    timeout?: number;
}

export interface ScreenshotResponse {
    base64: string;
}

export interface HtmlAndScreenshotResponse {
    html: string;
    screenshot: ScreenshotResponse;
}

export interface Scraper {
    getHTML(): Promise<string>;
    getScreenshot(): Promise<ScreenshotResponse>;
    getHTMLAndScreenshot(): Promise<HtmlAndScreenshotResponse>;
}

export class ScraperBase {
    validateUrl(givenUrl: string) {
        let url;

        try {
            url = new URL(givenUrl);
        } catch (error) {
            throw new RequestError('Url is invalid.', 400);
        }

        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
            throw new RequestError('Url Protocol needs to be http or https.', 400);
        }
    }
}
