var express = require('express');
var app = express()
app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static('public'));
app.listen(5000, () => {
    console.log('server is listening on port 5000');
});

app.get('', (req, res) => {
    res.render('index')
})