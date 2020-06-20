import express from 'express'
import knex from './database/connection'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController
const itemsController = new ItemsController

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes

/* Funcionalidades da aplicação 
    - Cadastro de ponto de coleta
    - Listar os items de coleta
    - Listar pontos de coleta (filtro por cidade/uf/items)
    - Listar um ponto de coleta específico
*/