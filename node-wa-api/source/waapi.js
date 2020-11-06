
const venom = require('venom-bot');
const middleware = require("./src/middleware/middleware")

function start(client, app) {
    client.onMessage((message) => {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Welcome from Whatsva')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        let sql = `insert into pesan set body ='${mysql_real_escape_string(message.body)}',fr='${message.from}',status='1'`;
        let query = conn.query(sql, (err) => {
            if (err) throw err;
            console.log(`{susccess: true,message : "pesan masuk from ${message.from} : '${message.body}'"}`);
          })
    });
    app.get('/sendText', async (req, res) => {
        // Send basic text
        await client
            .sendText('62895361034833@c.us', 'kode otp anda : "2342". jangan beritahu ke siapapun kode ini untuk menjaga keamanan akun anda')
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });

    })
    app.get('/sendImage', async (req, res) => {

        // Send image (you can also upload an image using a valid HTTP protocol)
        await client
            .sendImage(
                '62895361034833@c.us',
                'https://wallpaperaccess.com/full/1288076.jpg',
                'wallpaper',
                'Send Image OTP Whatsapp'
            )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    })
    app.get('/sendFile', async (req, res) => {
        await client
            .sendFile(
                '62895361034833@c.us',
                'https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf',
                'sendpdf',
                'Send Pdf OTP Whatsapp'
            )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    })


    app.post('/waapi/sendText', async (req, res) => {
        var to = req.body.to
        to = to + '@c.us'

        var pesan = req.body.pesan
        var valid = true;
        if (req.body.to === "") {
            valid = false
        }
        if (pesan === "") {
            valid = false;
        }
        if (valid) {
            await client
                .sendText(to, pesan)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',terkirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: true,message : "mengirim pesan sukses"}');
                      })
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',mengirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: false,message : "mengirim pesan gagal"}');
                      })
                    
                });
                
        } else {
            console.log('field required')
        }


    })
    app.post('/waapi/sendImage', async (req, res) => {
        var to = req.body.to
        to = to + '@c.us'

        var pesan = req.body.pesan
        var image = req.body.imageurl
        var image_name = req.body.image_name
        // Send image (you can also upload an image using a valid HTTP protocol)
        var valid = true;
        if (req.body.to === "") {
            valid = false;
        }
        if (image === "") {
            valid = false
        }
        if (image_name === "") {
            valid = false
        }
        if (valid) {
            await client
                .sendImage(
                    to,
                    image,
                    image_name,
                    pesan
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',terkirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: true,message : "mengirim gambar sukses"}');
                      })
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',mengirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: true,message : "mengirim gambar sukses"}');
                      })
                });
        } else {
            console.log('field required')
        }

    })
    app.post('/waapi/sendFile', async (req, res) => {
        var to = req.body.to
        to = to + '@c.us'

        var pesan = req.body.pesan
        var file = req.bodi.fileurl
        var file_name = req.body.file_name
        // Send image (you can also upload an image using a valid HTTP protocol)
        var valid = true;
        if (req.body.to === "") {
            valid = false;
        }
        if (file === "") {
            valid = false
        }
        if (file_name === "") {
            valid = false
        }
        if (valid) {
            await client
                .sendFile(
                    to,
                    file,
                    file_name,
                    pesan
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',terkirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: true,message : "mengirim pesan sukses"}');
                      })
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                    let sql = `insert into chat set tujuan ='${to}',keterangan='${mysql_real_escape_string(pesan)}',mengirim='1' `
                    let query = conn.query(sql, (err) => {
                        if (err) throw err;
                        res.send('{susccess: true,message : "mengirim pesan sukses"}');
                      })
                });
        }
    })
}
function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}

module.exports = app => {
    // server.get("/", (req,res) => res.send("hi"))

    venom
        .create(
            'otpwhatsapp',
            (base64Qrimg, asciiQR) => {
                console.log('Terminal qrcode: ', asciiQR);
                console.log('base64 image string qrcode: ', base64Qrimg);
            },
            (statusSession) => {
                console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled
            },
            {
                folderNameToken: 'tokens', //folder name when saving tokens
                mkdirFolderToken: '', //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
                headless: true, // Headless chrome
                devtools: false, // Open devtools by default
                useChrome: true, // If false will use Chromium instance
                debug: false, // Opens a debug session
                logQR: true, // Logs QR automatically in terminal
                browserArgs: [''], // Parameters to be added into the chrome browser instance
                puppeteerOptions: {
                args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
                ]},
		disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
                disableWelcome: true, // Will disable the welcoming message which appears in the beginning
                updatesLog: true, // Logs info updates automatically in terminal
                autoClose: 60000, // Automatically closes the venom-bot only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
            }
        )
        .then((client) => {
            start(client, app);
        })
        .catch((erro) => {
            console.log(erro);
        });

}
