import db from '../db.js';

export const createPerpustakaan = (data) => {
    const { nama_perpus, alamat, jam_buka, telepon, email } = data;
    const query = 'INSERT INTO perpustakaan (nama_perpus, alamat, jam_buka, telepon, email) VALUES (?, ?, ?, ?, ?)';
    return db.query(query, [nama_perpus, alamat, jam_buka, telepon, email]);
};

export const getAllPerpustakaan = () => {
    return db.query('SELECT * FROM perpustakaan');
};

export const getPerpustakaanById = (id) => {
    return db.query('SELECT * FROM perpustakaan WHERE id_perpus = ?', [id]);
};

export const updatePerpustakaan = (id, data) => {
    const { nama_perpus, alamat, jam_buka, telepon, email } = data;
    const query = 'UPDATE perpustakaan SET nama_perpus = ?, alamat = ?, jam_buka = ?, telepon = ?, email = ? WHERE id_perpus = ?';
    return db.query(query, [nama_perpus, alamat, jam_buka, telepon, email, id]);
};

export const deletePerpustakaan = (id) => {
    return db.query('DELETE FROM perpustakaan WHERE id_perpus = ?', [id]);
};