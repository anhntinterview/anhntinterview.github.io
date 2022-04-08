import { RestfulService } from './restful.service';
// CONSTANTS
import { AUTH, HOST_URL } from 'constant/api.const';
// TYPES
import { AuthLoginBodyType } from 'types/Auth.type';

const login = async (body: AuthLoginBodyType) => {
    if (body) {
        const res = await RestfulService.postApi(HOST_URL + AUTH.LOGIN, body);

        if (!!res.data.error) {
            throw res.data;
        }
        return res.data;
    }
};

export default {
    login
};
