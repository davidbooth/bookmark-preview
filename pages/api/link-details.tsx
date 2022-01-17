import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { LinkDetails } from '../../classes/linkDetails/LinkDetails';
import { RequestError } from '../../classes/error/Error';

export default async function LinkDetailsHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        allowOnlyGetRequests(req.method);
        validateUrl(req.query.url);
        await sendLinkDetails(req.query.url as string, res);
    } catch (error) {
        handleError(error, res);
    }
}

function allowOnlyGetRequests(method: string | undefined) {
    if (method !== 'GET') {
        throw new RequestError('Request Method not allowed.', 405);
    }
}

function validateUrl(url: string | string[]) {
    if (typeof url !== 'string') {
        throw new RequestError('Invalid url.', 400);
    }
}

async function sendLinkDetails(url: string, res: NextApiResponse<LinkDetails>) {
    const linkDetails = new LinkDetails(url);
    await linkDetails.produce();
    res.status(200).send(linkDetails);
}

function handleError(error: any, res: NextApiResponse<string>) {
    if (error instanceof RequestError) {
        handleRequestError(error, res);
    } else if (axios.isAxiosError(error)) {
        res.status(400).send('');
    } else {
        res.status(500).send('');
        console.error(error);
    }
}

function handleRequestError(error: RequestError, res: NextApiResponse<string>) {
    if (error.code === 405) {
        res.setHeader('Allow', 'GET');
    }

    res.status(error.code).send(error.message);
}
