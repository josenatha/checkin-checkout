// Model
const { Registration } = require('../model/registration.model');

const getAllRegisters = async (req, res) => {
	try {
		const registrations = await Registration.findAll();

		res.status(200).json({
			status: 'Succes',
			registrations,
		});
	} catch (error) {
		console.log(error);
	}
};

const getRegisterById = async (req, res) => {
	try {
		const { id } = req.params;

		const register = await Registration.findOne({ where: { id } });

		if (!register) {
			res.status(404).json({
				status: 'ERROR',
				msg: 'Register Not Found',
			});
		}

		res.status(200).json({
			status: 'Succes',
			register,
		});
	} catch (error) {
		console.log(error);
	}
};

const createRegister = async (req, res) => {
	try {
		const { entraceTime } = req.body;

		const newRegistration = await Registration.create({ entraceTime });

		res.status(201).json({
			status: 'Succes',
			newRegistration,
		});
	} catch (error) {
		console.log(error);
	}
};

const updateRegister = async (req, res) => {
	try {
		const { id } = req.params;
		const { exitTime } = req.body;

		const register = await Registration.findOne({ where: { id } });

		if (!register) {
			res.status(404).json({
				status: 'ERROR',
				msg: 'Register Not Found',
			});
		}

		await register.update({ exitTime, status: 'out' });

		res.status(200).json({
			status: 'Succes',
			msg: 'Register Updated!!',
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteRegister = async (req, res) => {
	try {
		const { id } = req.params;

		const register = await Registration.findOne({ where: { id } });

		if (!register) {
			res.status(404).json({
				status: 'ERROR',
				msg: 'Register Not Found',
			});
		}

		await register.update({ status: 'cancelled' });

		res.status(200).json({
			status: 'Succes',
			msg: 'Register Cancelled!!',
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllRegisters,
	getRegisterById,
	createRegister,
	updateRegister,
	deleteRegister,
};
