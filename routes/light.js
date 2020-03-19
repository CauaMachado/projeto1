var express = require('express');
var router = express.Router();

const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out');

router.post('on', function(req, res, next){
    led.writeSync(1);
    res.json({'status': 'Ok', 'data': 'Led Aceso'});
});

router.post('off', function(req, res, next){
    led.writeSync(0);
    res.json({'status': 'Ok', 'data': 'Led Apagado'});
});


module.exports = router;