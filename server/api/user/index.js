'use strict';

import {
  Router
} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

// hasRole('Admin') removed from 'get' (authentication) - all users
// auth.isAuthenticated() removed from 'get' (authentication) - single user
router.get('/', controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id', controller.update);
router.get('/:id', controller.show);
router.post('/', controller.create);

export default router;
