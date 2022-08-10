require("dotenv").config();
const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("pages"));

app.post("/clientesadd", async (req, res) => {
  const { name, cpfCnpj } = req.body;
  request(
    {
      method: "POST",
      url: "https://www.asaas.com/api/v3/customers",
      headers: {
        "Content-Type": "application/json",
        access_token: process.env.ASAAS_TOKEN,
      },
      body: JSON.stringify({
        name: name,
        cpfCnpj: cpfCnpj,
      }),
    },
    function (error, response, body) {
      if (error) return res.send(error);
      console.log(body);
      return res.send(body);
    }
  );
});

app.get("/faturasabertas", async (req, res) => {
  const { name, cpfCnpj } = req.body || {
    name: "",
    cpfCnpj: "06161612127",
  };
  request(
    {
      method: "GET",
      url: "https://www.asaas.com/api/v3/payments?customer=&billingType=&status=&subscription=&installment=&externalReference=&paymentDate=&pixQrCodeId=&anticipated=&paymentDate%5Bge%5D=&paymentDate%5Ble%5D=&dueDate%5Bge%5D=&dueDate%5Ble%5D=&offset=&limit=",
      headers: {
        "Content-Type": "application/json",
        access_token: process.env.ASAAS_TOKEN,
      },
      body: JSON.stringify({
        name: name,
        cpfCnpj: cpfCnpj,
      }),
    },
    function (error, response, body) {
      if (error) return res.send(error);
      console.log(body);
      return res.send(body);
    }
  );
});


// request(
//   {
//     method: "GET",
//     url: `https://www.asaas.com/api/v3/customers?&cpfCnpj=`,
//     headers: {
//       access_token: process.env.ASAAS_TOKEN,
//     },
//   },
//   async function (error, response, body) {
//     if (error) return response.statusCode;
//     const { data } = JSON.parse(body);
//     console.log(data);
//   }
// );

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

// n tira dessa tela
// n tira dessa tela
// n tira dessa tela
// n tira dessa tela
// n tira dessa tela
// n tira dessa tela
// n tira dessa tela
