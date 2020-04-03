    import { Router } from 'express';
    import { TShirt } from '../models/tShirtModel';
    // From https://github.com/RobinBuschmann/sequelize-typescript-example/blob/master/lib/routes/movies.ts
    
    export const tshirts = Router();
    // Initial get everything route
    tshirts.get('/', (req, res, next) => {
    TShirt
    .findAll()
    .then((data) => {
        return res.json(data);
        })
    .catch((err) => {
        console.log(err);
        return err;
        })
    });

    //get by id
    tshirts.get('/:id', async (req, res, next) => {
        try {
        const tshirt = await TShirt.scope(req.query['scope'])
        .findByPk(req.params['id']);
        res.json(tshirt);
        } catch (e) {
        next(e);
        }
    });
    // post
    tshirts.post('/', async (req, res, next) => {
        try {
        console.log(req.body);
        const tshirts = await TShirt.create(req.body);
        res.status(201).json(tshirts);
        } catch (e) {
        next(e);
        }
    });
    // update api/id
    tshirts.put('/:id', async (req, res, next) => {
        try {
        await TShirt
        .update<TShirt>(req.body, {where: {id: req.params['id']}});
        res.sendStatus(200);
        } catch (e) {
        next(e);
        }
    });