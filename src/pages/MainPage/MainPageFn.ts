// MIDDLEWARE
import sendingMiddleware from 'middleware/sending.middleware';

export function handleAssetData(dispatch: React.Dispatch<any>, uid: string) {
    sendingMiddleware.sending(dispatch, { uid });
}
