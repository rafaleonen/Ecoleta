import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return response.json(serializedItems)
})

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body

    const trx = await knex.transaction()

    const insertedIDs = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    })

    const point_id = insertedIDs[0]

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id
        }
    })

    await trx('point_items').insert(pointItems)

    return response.json({ sucess: true })
})

export default routes

/* Funcionalidades da aplicação 
    - Cadastro de ponto de coleta
    - Listar os items de coleta
    - Listar pontos de coleta (filtro por cidade/uf/items)
    - Listar um ponto de coleta específico
*/