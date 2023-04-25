const axios = require("axios");
require("dotenv").config();

const { DOMAIN_ENDPOINT, ATLASSIAN_USERNAME, ATLASSIAN_API_KEY } = process.env;

const getIssue = async () => {
  const baseUrl = `${DOMAIN_ENDPOINT}/rest/api/2/issue/<taskIssueId>`;

  const auth = {
      username: ATLASSIAN_USERNAME,
      password: ATLASSIAN_API_KEY,
    };
    const config = {
        method: "get",
        url: baseUrl,
        headers: { "Content-Type": "application/json" },
        auth: auth,
    };
    
  try {
    const req = await axios.request(config);
    const { assignee, status, summary } = req.data.fields;
    const result = {
      taskName: summary,
      taskStatus: status.name,
      taskAssignee: assignee.displayName,
    };
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getIssue;
