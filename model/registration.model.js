const { db, DataTypes } = require('../utils/db');

const Registration = db.define('Registration', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	entraceTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	status: {
		type: DataTypes.ENUM('working', 'out', 'cancelled'),
		defaultValue: 'working',
	},
});

module.exports = { Registration };
