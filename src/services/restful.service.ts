import axios, { AxiosError, AxiosResponse } from 'axios';
import { HOST_URL } from 'constant/api.const';

const axiosInstance = axios.create({
    baseURL: HOST_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;

export const handleGetAxiosResponse = (res: AxiosResponse<any>) => {
    if (!!res.data.error) {
        throw res.data;
    }
    return res.data;
};

export class RestfulService {
    static getApi = (
        url: string,
        params?: any
    ): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .get(url, {
                params: params,
            })
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };
    static getBearerApi = (
        url: string,
        token: string,
        body?: Record<any, any>
    ) => {
        return fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: body ? JSON.stringify(body) : null,
        });
    };
    static postApiFormData = (url: string, bodyFormData: FormData) => {
        return axiosInstance
            .post(url, bodyFormData)
            .then((res) => res.data)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response.data;
                }
            });
    };
    static postApi = (
        url: string,
        bodyData?: any
    ): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .post(url, bodyData)
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };

    static postBearerApiFormData = (
        url: string,
        token: string,
        bodyFormData: FormData
    ) => {
        return fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                // 'Content-Type': type,
                Authorization: `Bearer ${token}`,
            },
            body: bodyFormData,
        });
    };

    static putBearerApi = (url: string, token: string, bodyData: any) => {
        return fetch(url, {
            method: 'PUT',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bodyData),
        });
    };
    static postBearerApi = (url: string, token: string, bodyData?: any) => {
        return axios
            .post(url, bodyData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    return error.response;
                }
            });
    };
    static putApi = (url: string, params: any): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .put(url, JSON.stringify(params))
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };

    static deleteApi = (
        url: string,
        body?: any
    ): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .delete(url, {
                data: body ? body : null,
            })
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };
    static deleteBodyApi = (
        url: string,
        body: any
    ): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .delete(url, {
                data: body,
            })
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };
    static patchApi = (
        url: string,
        body?: Record<string, any>
    ): Promise<AxiosResponse<any>> => {
        return axiosInstance
            .patch(url, body ? JSON.stringify(body) : null)
            .then((res) => res)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    return error.response;
                }
            });
    };
}
