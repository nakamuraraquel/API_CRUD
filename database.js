const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://<username>:<passoword>@<host>:<port>/<database_name>')

module.exports = (async () => {
    const models = {}

    models.Paciente = sequelize.define('Paciente', {
        paciente_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_paciente: {
            type: DataTypes.STRING,
        },
        idade: {
            type: DataTypes.INTEGER,
        }
    })

    await models.Paciente.sync()

    models.Medico = sequelize.define('Medico', {
        medico_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_medico: {
            type: DataTypes.STRING,
        },
        especializacao: {
            type: DataTypes.STRING
        }
    })

    await models.Medico.sync()

    models.MedicoPaciente = sequelize.define('MedicoPaciente', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        paciente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: models.Paciente,
                key: 'id'
            }
        },
        medico_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: models.Medico,
                key: 'id'
            }
        }
    })

    await models.MedicoPaciente.sync()

    return models
})()