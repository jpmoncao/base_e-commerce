import { Response } from 'express';

export function sendResponse(
    res: Response,
    success: boolean,
    data: any,
    message: string
): void {
    res.json({ success, data, message });
}
