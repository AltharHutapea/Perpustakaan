import express from 'express';
import * as bukuApi from '../../controllers/api/bukuApiController.js';
const router = express.Router();

router.post('/', bukuApi.create);
router.get('/', bukuApi.getAll);
router.get('/:id', bukuApi.getById);
router.put('/:id', bukuApi.update);
router.delete('/:id', bukuApi.remove);
router.get('/perpustakaan/:id_perpus', bukuApi.getByPerpustakaan);

export default router;