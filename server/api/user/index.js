'use strict';

import {
  Router
} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

// 'auth.isAuthenticated()' removed from get:me, put:id/password, put:id, get:id - quick Postman access
// 'auth.hasRole('admin')' removed from delete:id - quick Postman access
router.get('/', controller.index);
router.delete('/:id', controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', controller.changePassword);
router.put('/:id', controller.update);
router.get('/:id', controller.show);
router.post('/', controller.create);

export default router;
