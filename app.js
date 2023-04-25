const getIssue = require("./src/getIssue");

const getIssueData = async () => {
  const data = await getIssue();
  console.log(data);
};

getIssueData();
