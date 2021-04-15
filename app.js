const express = require('express')
const cors = require('cors')
const videoUrlLink = require('video-url-link');
let ejs = require('ejs');
const app = express();

// utiliser le js et le css dans le dossier views
app.use('/views', express.static('views'));

// CORS
app.use(cors())

// PATH
app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.get('/twitter', (req, res) => {
    let URL = req.query.URL;
    console.log('URL', URL)

    videoUrlLink.twitter.getInfo(URL, {}, (error, info) => {
        if (error) {
            console.error(error);
        } else {

            console.log(info.variants)
            res.render('twitter.ejs', {response: info.variants})
        }
    })
})

app.listen(3000, () => {
    console.log('Serveur lancé http://localhost:3000/')
})