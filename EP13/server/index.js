const express = require('express');
const axios = require('axios');
const router = express.Router();

const app = express();

router.post('/capture-order', async (req, res) => {
  const { orderID } = req.body;

  const clientID = 'AZEpM7mSfEsQsg5INFxEz5OZeuaOzIh0IEmLKO5ovP3lnDMCShVIzJQ8xMgxNHj5j8s-imtfazLVFo_A';
  const clientSecret = 'EJuWwdld_R0Vy16rmM_kEsxMuIkEIIasRszrGcu8q4h6WRg6kprATS8gKB1QJCF4fhtvLM7K2djr1Hqx';

  const auth = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');

  try {
    const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {}, {
      headers: {
        Authorization: `Basic ${auth}`,
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

app.listen(3001,()=>{
    console.log("App is Listing on PORT", 3000)
});
