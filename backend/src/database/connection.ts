import knex from 'knex'
import path from 'path'

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection

// Pontos de entidade da aplicação
/*
    - Pontos de coleta (points)
        - image
        - name
        - email
        - whatsapp
        - latitude
        - longitude
        - city
        - uf

    - Items para coleta (items)
        - image
        - title

    Relação : Muitos para Muitos (N-N) (Pivot)
    1 ponto de coleta tem vários items

    - Relacionamento de items que um ponto coleta (point-items)
        - point_id
        - item_id
*/