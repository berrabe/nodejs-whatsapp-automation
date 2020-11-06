
const AdminController = require("./src/controller/AdminController")
const ChatController = require("./src/controller/ChatController")
const ReceiveController = require("./src/controller/ReceiveController")
module.exports = app => {
    var data = {}
    app.get('/testing/:id',async (req, res) => {
        var id = req.params.id 
        data[[id]] = id
        var cek = "212";
        for(const i in data){
            if(cek == i){
                console.log("oke")
            }
        }
        res.send(data)
    })
    app.get('/',AdminController.dashboard)

    app.get('/chat', ChatController.list)
    app.get('/chat/add', ChatController.add)
    app.post('/chat/simpan', [ChatController.simpan])
    app.get('/chat/hapus/:id', ChatController.hapus)

    app.get('/receive',ReceiveController.list)
    app.get('/receive/hapus/:id', ReceiveController.hapus)


}