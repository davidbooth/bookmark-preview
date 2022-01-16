import { RequestError } from '../error/Error';

export class Link {
    static validate(givenUrl: string): void {
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

    static isValid(url: string): boolean {
        try {
            Link.validate(url);
            return true;
        } catch (error) {
            return false;
        }
    }
}
