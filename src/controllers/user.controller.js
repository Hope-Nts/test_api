const { getFullList } = require("../services/pocketbase");
const COLLECTION_NAME = "users";

async function getAllUsers(req, res) {
  try {
    const response = await getFullList(COLLECTION_NAME);
    console.log(response);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "failed to get user records" });
  }
}

module.exports = { getAllUsers };
