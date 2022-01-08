import axios, { AxiosResponse } from 'axios';
import {
    HtmlAndScreenshotResponse,
    Scraper,
    ScraperBase,
    ScrapeRequestConfig,
    ScreenshotResponse,
} from './Scraper';

const API_KEY = process.env.WSA_API_KEY;
export const API_URL = 'https://api.webscrapingapi.com/v1';

export class WSAScraper extends ScraperBase implements Scraper {
    constructor(private config: ScrapeRequestConfig) {
        super();
        this.validateUrl(this.config.url);
    }

    async getHtmlAndScreenshot(): Promise<HtmlAndScreenshotResponse> {
        const [html, screenshot] = await Promise.all([this.getHTML(), this.getScreenshot()]);

        return {
            html,
            screenshot,
        };
    }

    async getHTML(): Promise<string> {
        return this.sendScrapeRequest(false).then((response) => response.data);
    }

    async getScreenshot(): Promise<ScreenshotResponse> {
        const response = await this.sendScrapeRequest(true);
        return { base64: `data:image/png;base64, ${response.data.screenshot}` };
    }

    private async sendScrapeRequest(takeScreenshot: boolean): Promise<AxiosResponse> {
        const params = {
            api_key: API_KEY,
            url: this.config.url,
            render_js: takeScreenshot ? 1 : Number(this.config.renderJavascript || false),
            timeout: this.config.timeout,
            device: this.config.device,
            wait_until: this.config.waitUntilEvent,
            wait_for: this.config.delay,
            screenshot: Number(takeScreenshot),
        };

        return axios.get(API_URL, { params });
    }
}
