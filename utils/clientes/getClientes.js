const request = require("request");

module.export = ({ name, cpfCnpj }) =>
  request(
    {
      method: "GET",
      url: `https://www.asaas.com/api/v3/customers?&cpfCnpj=${cpfCnpj}&name=${name}`,
      headers: {
        access_token: process.env.ASAAS_TOKEN,
      },
    },
    async function (error, response, body) {
      if (error) return response.statusCode;
      const { data } = JSON.parse(body);
      return JSON.parse(data);
    }
  );
