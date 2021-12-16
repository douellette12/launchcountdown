import express from "express"
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static('public'))

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server listening at http://localhost:${PORT}`)
})
