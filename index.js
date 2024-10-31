import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/login', (req, res) => {
    res.send('Login Success');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});