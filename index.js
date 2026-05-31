import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import perpustakaanApiRoutes from './routes/api/perpustakaanRoutes.js';
import bukuApiRoutes from './routes/api/bukuRoutes.js';
import perpustakaanWebRoutes from './routes/web/perpustakaanRoutes.js';
import bukuWebRoutes from './routes/web/bukuRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 1703;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/perpustakaan', perpustakaanApiRoutes);
app.use('/api/buku', bukuApiRoutes);
app.use('/perpustakaan', perpustakaanWebRoutes);
app.use('/buku', bukuWebRoutes);

app.get('/', (req, res) => {
    res.redirect('/perpustakaan');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Terjadi kesalahan server');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});