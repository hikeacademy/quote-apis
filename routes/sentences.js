var express = require('express');
var router = express.Router();

const randomSentences = [
        'Frase aleatória 1',
        'Frase aleatória 2',
        'Frase aleatória 3',
        'Frase aleatória 4',
        'Frase aleatória 5',
        'Frase aleatória 6',
        'Frase aleatória 7',
        'Frase aleatória 8',
    ];

router.get('/', function(req, res, next) {
  res.json({sentences: randomSentences});
});

router.get('/random', function(req, res, next) {
  const randomSentence = randomSentences[Math.floor(Math.random()*randomSentences.length)];
  res.json({random: randomSentence});
});

router.get('/:sentenceId', function(req, res, next) {
  const sentenceId = parseInt(req.params.sentenceId);
  if(sentenceId < randomSentences.length) {
    res.json({quote: randomSentences[sentenceId]});  
  } else {
    res.json({quote: `Couldn\'t find quote with id ${sentenceId}`});  
  }
});

module.exports = router;
