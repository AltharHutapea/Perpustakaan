import * as perpustakaanModel from '../../models/perpustakaanModel.js';
import * as bukuModel from '../../models/bukuModel.js';

export const index = async (req, res) => {
    try {
        const [perpustakaan] = await perpustakaanModel.getAllPerpustakaan();
        res.render('perpustakaan/index', { perpustakaan, title: 'Daftar Perpustakaan' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const createForm = (req, res) => {
    res.render('perpustakaan/create', { title: 'Tambah Perpustakaan' });
};

export const store = async (req, res) => {
    try {
        const { nama_perpus, alamat, jam_buka, telepon, email } = req.body;
        await perpustakaanModel.createPerpustakaan({ nama_perpus, alamat, jam_buka, telepon, email });
        res.redirect('/perpustakaan');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const editForm = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await perpustakaanModel.getPerpustakaanById(id);
        if (rows.length === 0) return res.status(404).send('Perpustakaan tidak ditemukan');
        res.render('perpustakaan/edit', { perpus: rows[0], title: 'Edit Perpustakaan' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_perpus, alamat, jam_buka, telepon, email } = req.body;
        await perpustakaanModel.updatePerpustakaan(id, { nama_perpus, alamat, jam_buka, telepon, email });
        res.redirect('/perpustakaan');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await perpustakaanModel.deletePerpustakaan(id);
        res.redirect('/perpustakaan');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const [perpustakaanRows] = await perpustakaanModel.getPerpustakaanById(id);
        if (perpustakaanRows.length === 0) return res.status(404).send('Perpustakaan tidak ditemukan');
        const perpus = perpustakaanRows[0];
        const [bukuRows] = await bukuModel.getBukuByPerpustakaanId(id);
        res.render('perpustakaan/show', { perpus, buku: bukuRows, title: 'Detail Perpustakaan' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};