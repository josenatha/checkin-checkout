const express = require('express');

// Controllers
const {
	getAllRegisters,
	getRegisterById,
	createRegister,
	updateRegister,
	deleteRegister,
} = require('../controllers/registration.controllers');

const router = express.Router();

router.get('/', getAllRegisters);
router.post('/', createRegister);

router.get('/:id', getRegisterById);
router.patch('/:id', updateRegister);
router.delete('/:id', deleteRegister);

module.exports = {
	registrationsRouter: router,
};
