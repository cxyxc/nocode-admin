const app = require('./sls')

app.listen(8888, 'localhost', () => {
    console.log('devServer listen on http://localhost:8888');
});
