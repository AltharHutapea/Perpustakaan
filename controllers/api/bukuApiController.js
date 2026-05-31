import * as bukuModel from '../../models/bukuModel.js';

export const create = async (req, res) => {
    try {
        const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = req.body;
        if (!id_perpus || !judul) return res.status(400).json({ error: 'id_perpus dan judul wajib diisi' });
        const [result] = await bukuModel.createBuku({ id_perpus, judul, pengarang, penerbit, tahun_terbit });
        res.status(201).json({ message: 'Buku berhasil ditambahkan', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const [rows] = await bukuModel.getAllBuku();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await bukuModel.getBukuById(id);
        if (rows.length === 0) return res.status(404).json({ error: 'Buku tidak ditemukan' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = req.body;
        const [result] = await bukuModel.updateBuku(id, { id_perpus, judul, pengarang, penerbit, tahun_terbit });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Buku tidak ditemukan' });
        res.status(200).json({ message: 'Buku berhasil diupdate' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await bukuModel.deleteBuku(id);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Buku tidak ditemukan' });
        res.status(200).json({ message: 'Buku berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getByPerpustakaan = async (req, res) => {
    try {
        const { id_perpus } = req.params;
        const [rows] = await bukuModel.getBukuByPerpustakaanId(id_perpus);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};