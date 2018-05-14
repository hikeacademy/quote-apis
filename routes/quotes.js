var express = require('express');
var router = express.Router();

const randomQuotes = [
        'Frase aleatória 1',
        'Frase aleatória 2',
        'Frase aleatória 3',
        'Frase aleatória 4',
        'Frase aleatória 5',
        'Frase aleatória 6',
        'Frase aleatória 7',
        'Frase aleatória 8',
    ];

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  res.json({quotes: randomQuotes});
});

router.get('/random', function(req, res, next) {
  const randomQuote = randomQuotes[Math.floor(Math.random()*randomQuotes.length)];
  res.json({random: randomQuote});
});

router.get('/:quoteId', function(req, res, next) {
  const quoteId = parseInt(req.params.quoteId);
  if(quoteId < randomQuotes.length) {
    res.json({quote: randomQuotes[quoteId]});  
  } else {
    res.json({quote: `Couldn\'t find quote with id ${quoteId}`});  
  }
});

module.exports = router;
