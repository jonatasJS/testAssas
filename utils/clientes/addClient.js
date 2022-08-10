const request = require("request");

module.export = (body) =>
  request(
    {
      method: "POST",
      url: "https://www.asaas.com/api/v3/customers",
      headers: {
        "Content-Type": "application/json",
        access_token: process.env.ASAAS_TOKEN,
      },
      body: JSON.stringify({
        name: body.name,
        cpfCnpj: body.cpfCnpj,
      }),
    },
    function (error, response, body) {
      if(error) return response.statusCode;
      return 'Cliente cadastrado com sucesso!';
    }
  );
