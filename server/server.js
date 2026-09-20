import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/scripts', express.static('./public/scripts'))
app.use('/images', express.static('./public/images'))
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">African Countries Travel Guide</h1>')
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})