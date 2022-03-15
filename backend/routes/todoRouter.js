const Router = require('express');
const todoController = require('../controllers/todoController');

const router = new Router()

router.get('/', todoController.getAll);
router.get('/:id', todoController.getOne);

router.post('/', todoController.create);

router.put('/:id', todoController.updateStatus);

router.delete('/', todoController.deteleAll)
router.delete('/:id', todoController.detele)

module.exports = router;