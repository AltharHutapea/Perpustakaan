import * as bukuModel from '../../models/bukuModel.js';
import * as perpustakaanModel from '../../models/perpustakaanModel.js';

export const index = async (req, res) => {
    try {
        const [buku] = await bukuModel.getAllBuku();
        res.render('buku/index', { buku, title: 'Daftar Buku' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const createForm = async (req, res) => {
    try {
        const [perpustakaan] = await perpustakaanModel.getAllPerpustakaan();
        res.render('buku/create', { perpustakaan, title: 'Tambah Buku' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const store = async (req, res) => {
    try {
        const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = req.body;
        await bukuModel.createBuku({ id_perpus, judul, pengarang, penerbit, tahun_terbit });
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const editForm = async (req, res) => {
    try {
        const { id } = req.params;
        const [bukuRows] = await bukuModel.getBukuById(id);
        if (bukuRows.length === 0) return res.status(404).send('Buku tidak ditemukan');
        const [perpustakaan] = await perpustakaanModel.getAllPerpustakaan();
        res.render('buku/edit', { buku: bukuRows[0], perpustakaan, title: 'Edit Buku' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = req.body;
        await bukuModel.updateBuku(id, { id_perpus, judul, pengarang, penerbit, tahun_terbit });
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await bukuModel.deleteBuku(id);
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await bukuModel.getBukuById(id);
        if (rows.length === 0) return res.status(404).send('Buku tidak ditemukan');
        res.render('buku/show', { buku: rows[0], title: 'Detail Buku' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};