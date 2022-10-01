import pgp from "pg-promise"
import express from "express"
import axios from "axios"
const app = express()

// driver (inbound)
app.get("/cards/:cardNumber/invoices", async function(req, res) {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  // driver (outbound)
  const url = "postgres://postgres:postgres@localhost:5432/db_johndoe"
  const connection = pgp()(url)
  
  const purchases = await connection.query("select * from purchases where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3", [req.params.cardNumber, month, year])
  const response = await axios.get('http://localhost:3000/currencies')
  const currency = response.data

  //application
  let total = 0
  for(const purchase of purchases) {
    if(purchase.currency === "USD") {
      total += parseFloat(purchase.amount) * currency.amount
    } else {
      total += parseFloat(purchase.amount)
    }
  }

  res.send({
    total
  })
})

app.listen(3001)

