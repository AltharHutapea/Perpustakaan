import express from 'express';
import * as perpustakaanApi from '../../controllers/api/perpustakaanApiController.js';
const router = express.Router();

router.post('/', perpustakaanApi.create);
router.get('/', perpustakaanApi.getAll);
router.get('/:id', perpustakaanApi.getById);
router.put('/:id', perpustakaanApi.update);
router.delete('/:id', perpustakaanApi.remove);

export default router;