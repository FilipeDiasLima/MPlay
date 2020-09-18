import { Router } from 'express';

import CityController from './controllers/CityController';
import CoordController from './controllers/CoordController';

const routes = Router();

// city
routes.post('/city', CityController.store);

// coordinates
routes.post('/coordinates', CoordController.store);

export default routes;
