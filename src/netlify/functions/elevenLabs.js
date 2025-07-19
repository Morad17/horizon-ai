exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ agentId: process.env.AGENT_ID }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
