const dev = 'development' === process.env.NODE_ENV;

export default {
    theme: {
        backgroundColor: '#304156',
        textColor: '#FFFFFF',
        activeTextColor: '#409EFF'
    },
    cdn: dev ? '' : 'https://d.cloud.undsky.com/demo/admin/',
    request: {
        baseURL: dev ? 'http://localhost:7001' : window.location.origin,
        timeout: 600000,
        custom: {
            auth: true
        }
    },
    pageSize: 10 // 10,15,20,50,100
};
