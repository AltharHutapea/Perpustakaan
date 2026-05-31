import * as perpustakaanModel from '../../models/perpustakaanModel.js';

export const create = async (req, res) => {
    try {
        const { nama_perpus, alamat, jam_buka, telepon, email } = req.body;
        if (!nama_perpus) return res.status(400).json({ error: 'Nama perpustakaan wajib diisi' });
        const [result] = await perpustakaanModel.createPerpustakaan({ nama_perpus, alamat, jam_buka, telepon, email });
        res.status(201).json({ message: 'Perpustakaan berhasil dibuat', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const [rows] = await perpustakaanModel.getAllPerpustakaan();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await perpustakaanModel.getPerpustakaanById(id);
        if (rows.length === 0) return res.status(404).json({ error: 'Perpustakaan tidak ditemukan' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_perpus, alamat, jam_buka, telepon, email } = req.body;
        const [result] = await perpustakaanModel.updatePerpustakaan(id, { nama_perpus, alamat, jam_buka, telepon, email });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Perpustakaan tidak ditemukan' });
        res.status(200).json({ message: 'Perpustakaan berhasil diupdate' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await perpustakaanModel.deletePerpustakaan(id);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Perpustakaan tidak ditemukan' });
        res.status(200).json({ message: 'Perpustakaan berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};