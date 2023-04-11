import req from './api';

// 查询公链详情
export const getInfo = (chainShortName) => {
  return req.get('/api/v5/explorer/blockchain/info', {
    params:{
        chainShortName
    }
  });
};

// 查询持币地址基础信息
export const getAddress = (chainShortName) => {
  return req.get('/api/v5/explorer/blockchain/address', {
    params: {
      chainShortName,
    },
  });
};

export const getBlock = (chainShortName) => {
  return req.get('/block', {
    params: {
      chainShortName,
    },
  });
};
// 查询最佳手续费或Gas费

export const getFee = (chainShortName) => {
  return req.get('/fee', {
    params: {
      chainShortName,
    },
  });
};

export const getHashes = (chainShortName) => {
  return req.get('/hashes', {
    params: {
      chainShortName,
    },
  });
};

// 查询挖矿基础信息
export const getMine = (chainShortName) => {
  return req.get('/mine', {
    params: {
      chainShortName,
    },
  });
};

// 查询挖矿基础信息

export const getBlockList = (params) => {
  return req.get('/api/v5/explorer/block/block-list', {
    params
  });
};
