import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res)=>{
    res.send('hello')

app.get('/lorem', (req,res)=>{
    res.send('lorem ipsum...')
})

app.get('/user/:name', (req, res)=>{
    const user = req.params
    res.send(`welcome back, ${user.name}`)
})


})
app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})