

module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myblog' //mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名
}