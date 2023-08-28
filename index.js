const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const node = process.env.NODE || "no value set"
const pod = process.env.POD || "no value set"

app.get('/', (req, res) => {
  res.json({
    node: node,
    pod: pod
  })
})

app.listen(port, () => {
  console.log(`Sugar listening on port ${port}`)
})

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});