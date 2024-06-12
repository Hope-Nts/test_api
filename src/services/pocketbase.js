const PocketBase = require("pocketbase/cjs");

const pb = new PocketBase("http://13.245.92.182:8090");

async function getPaginatedRecordList(collectionName, _page, _perPage) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await pb
        .collection(collectionName)
        .getList((page = _page), (perPage = _perPage), (options = {}));
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
}

async function getFullList(collectionName) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await pb
        .collection(collectionName)
        .getFullList((options = {}));
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { getPaginatedRecordList, getFullList } ;
