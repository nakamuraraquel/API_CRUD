const express = require('express')
const { Paciente, Medico, MedicoPaciente} = require('./database')
const PORT = 3000
const app = express()

Paciente.belongsToMany(Medico, { through: MedicoPaciente})
Medico.belongsToMany(Paciente, { through: MedicoPaciente})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/pacientes/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Paciente.findOne({
            where: { id: id },
        })
    
        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.post('/pacientes', async (req, res) => {
    const data = req.body

    try {
        const result = await Paciente.create({nome: data.nome, idade: data.idade})

        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/pacientes/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await Paciente.update({nome: data.nome, idade: data.idade}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/pacientes/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Paciente.destroy({
            where: {id: id}
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.get('/medicos/:id', async (req, res) => {
    const id = req.params.id

    try {
        
        const result = await Medico.findOne({
            where: { id },
            attributes: ['medico_id', 'nome_medico'],
            include: {
                model: Paciente,
                attributes: ['user_id']
            }
        })
    
        res.status(200).json(result.dataValues)
    } catch (err) {
        res.json(err)
    }
})

app.post('/medicos', async (req, res) => {
    const data = req.body

    try {
        const result = await Medico.create({nome: data.nome, especializacao: data.especializacao})

        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/medicos/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await Medico.update({nome: data.nome, especializacao: data.especializacao}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/medicos/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Medico.destroy({
            where: {id: id}
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.post('/medicoPaciente', async (req, res) => {
    const data = req.body

    try {
        const result = await MedicoPaciente.create({paciente_id: data.paciente_id, medico_id: data.medico_id})

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/medicoPaciente/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await MedicoPaciente.update({medico_id: data.medico_id, paciente_id: data.paciente_id}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/medicoPaciente/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await MedicoPaciente.delete({
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.listen(PORT, () => console.log('> Server is listening on port: ' + PORT))