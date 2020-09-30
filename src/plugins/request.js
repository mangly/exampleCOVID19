import axios from 'axios'
// import qs from 'qs'

//axios.defaults.baseURL = 'http://sip-api.dap.ecc.cu:8000'

// function tokenInterceptor() {
//     axios.interceptors.request.use((config) => {
//         config.headers.Authorization = 'Bearer ' + keycloak.token
//         return config
//     }, (error) => {
//         return Promise.reject(error)
//     })
// }

const request = {
    install(Vue) {
        Vue.prototype.$get = function (url) {
            //tokenInterceptor()
            return axios
                .get(url)
                .then((response) => {
                    return {
                        state: true,
                        response: response
                    }
                })
                .catch(error => {
                    return {
                        state: false,
                        response: error.response
                    }
                });
        }

    }
};

export default request;