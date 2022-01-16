import { RequestError } from '../error/Error';
import { Link } from '../link/Link';

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
        return Link.validate(givenUrl);
    }
}
