import express from 'express';

const express = require('express');

const port = 5000;

const app = express();

app.get('/',(res,req)=> {
    res.send('API is running...');
});

app.listen(port,() => console.log(`Server running on port ${port}`));