const { Router } = require('express');
const shopController = require('./shop');

module.exports = async function initControllers() {
  const router = Router();
  // 挂载路由
  router.use('/api/shop', await shopController());
  return router;
};
