const express = require('express'),
    cors = require('cors'),
    port = 3001,
    ctrl = require('./controllers/messages_controller')
    
const app = express()
app.use(express.json())

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.listen(port, () => console.log(` WE RUNNING ON ${port}`))

