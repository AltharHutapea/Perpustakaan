import express from 'express';
import * as perpustakaanWeb from '../../controllers/web/perpustakaanWebController.js';
const router = express.Router();

router.get('/', perpustakaanWeb.index);
router.get('/create', perpustakaanWeb.createForm);
router.post('/', perpustakaanWeb.store);
router.get('/:id/edit', perpustakaanWeb.editForm);
router.post('/:id', perpustakaanWeb.update);
router.post('/:id/delete', perpustakaanWeb.destroy);
router.get('/:id', perpustakaanWeb.show);

export default router;