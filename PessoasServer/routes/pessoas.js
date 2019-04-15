var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.Pessoa.findAll({})
    .then(pessoas => res.json({
      pessoas
  }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
  }));
});

router.get('/:id', (req, res, next) => {
  const pessoa_id = req.params.id;
  model.Pessoa.findAll({
    where: { id: pessoa_id }
  })
  .then(pessoa => res.json({
    error: false,
    data: pessoa
}))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
}));
});

router.post('/', (req, res, next) => {
  const {name, email, adress, sex, active} = req.body;
  model.Pessoa.create({
      name: name,
      email: email,
      adress: adress, 
      sex: sex,
      active: active
    })
    .then(pessoa => res.status(201).json({
      error: false,
      data: pessoa,
      message: 'Nova pessoa criada.'
    }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }));
});

router.put('/:id', (req, res, next) => {
  const pessoa_id = req.params.id;
  const {name, email, adress, sex, active} = req.body;
  model.Pessoa.update({
      name: name,
      email: email,
      adress: adress, 
      sex: sex,
      active: active
    }, {
      where: {
        id: pessoa_id
      }
    })
    .then(pessoa => res.status(201).json({
      error: false,
      message: 'Pessoa foi atualizada.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});

router.delete('/:id', (req, res, next) => {
  const pessoa_id = req.params.id;
  model.Pessoa.destroy({
    where: {
      id: pessoa_id
    }
  })
  .then(pessoa => res.status(201).json({
    error: false,
    message: 'Pessoa foi excluída.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

module.exports = router;
