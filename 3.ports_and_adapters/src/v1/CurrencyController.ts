import pgp from "pg-promise"
import express from "express"
const app = express()

app.get("/currencies", async function(req, res) {
  res.json({
    amount: Math.floor(Math.random() * 10)
  })
})

app.listen(3000)

