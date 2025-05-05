const express = require('express') 
const router = express.Router()
const path = require('path')


// Mini app
// eg /new/home
// for /home we are working here

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  });
  
router.get('/home', (req, res) => {
  res.send("Welcome to Subdir Home Page");
});
  
module.exports = router;