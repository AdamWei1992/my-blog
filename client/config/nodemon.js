

const nodemon = require('nodemon')
const path = require('path')

const options = {
    'script': path.resolve(__dirname, './mockServer.js'),
    'watch': [
        'src/mock/'
    ],
    'restartable': 'rs',
    'verbose': true,
    'colours': true
}

nodemon(options).on('start', ()=>{ // 启动时的事件
    console.log('App has started');
}).on('quit', ()=>{ // 退出时的事件
    console.log('App has quit');
    process.exit();
}).on('restart', function (files) { // 重启时的事件
    console.log('App restarted due to: ', files);
});