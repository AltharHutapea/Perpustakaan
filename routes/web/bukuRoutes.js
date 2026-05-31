import express from 'express';
import * as bukuWeb from '../../controllers/web/bukuWebController.js';
const router = express.Router();

router.get('/', bukuWeb.index);
router.get('/create', bukuWeb.createForm);
router.post('/', bukuWeb.store);
router.get('/:id/edit', bukuWeb.editForm);
router.post('/:id', bukuWeb.update);
router.post('/:id/delete', bukuWeb.destroy);
router.get('/:id', bukuWeb.show);

export default router;