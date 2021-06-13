'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const DataController = require('./controller/data')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/login/account', (req, res) => {
  const { password, username } = req.body;
  if (password === '123456' && username === 'admin') {
    res.send({
      status: 'ok',
      currentAuthority: 'admin',
    });
    return;
  }
  if (password === '123456' && username === 'user') {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
    return;
  }
  res.send({
    status: 'error',
  });
});

app.get('/api/currentUser', (req, res) => {
  res.send({
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
  });
});

app.use("/api/data", DataController)

module.exports = app;
