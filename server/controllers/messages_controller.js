const messages = []

let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        const newMessage = {
            text,
            time,
            id
        }
        id++
        messages.push(newMessage)
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text, time} = req.body
        let messageObj = messages.find(element => +req.params.id === element.id)
        messageObj = {
            id: messageObj.id,
            text: text || messageObj.text,
            time: time || messageObj.time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let index = messages.findIndex(element => +req.params.id === element.id)
        messages.splice(index, 1)
        res.status(200).send(messages)

    }

}