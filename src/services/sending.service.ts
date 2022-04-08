import { RestfulService } from './restful.service';
// CONSTANTS
import { SENDING, HOST_URL } from 'constant/api.const';
// TYPES
import { SendingBodyType } from 'types/Sending.type';

const sending = async (body: SendingBodyType) => {
    if (body) {
        const res = await RestfulService.postApi(HOST_URL + SENDING.LOGIN, body);

        if (!!res.data.error) {
            throw res.data;
        }
        return res.data;
    }
};

export default {
    sending
};
