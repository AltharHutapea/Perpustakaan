import db from '../db.js';

export const createBuku = (data) => {
    const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = data;
    const query = 'INSERT INTO buku (id_perpus, judul, pengarang, penerbit, tahun_terbit) VALUES (?, ?, ?, ?, ?)';
    return db.query(query, [id_perpus, judul, pengarang, penerbit, tahun_terbit]);
};

export const getAllBuku = () => {
    const query = `
        SELECT buku.*, perpustakaan.nama_perpus 
        FROM buku 
        JOIN perpustakaan ON buku.id_perpus = perpustakaan.id_perpus
    `;
    return db.query(query);
};

export const getBukuById = (id) => {
    const query = `
        SELECT buku.*, perpustakaan.nama_perpus 
        FROM buku 
        JOIN perpustakaan ON buku.id_perpus = perpustakaan.id_perpus
        WHERE buku.id_buku = ?
    `;
    return db.query(query, [id]);
};

export const updateBuku = (id, data) => {
    const { id_perpus, judul, pengarang, penerbit, tahun_terbit } = data;
    const query = 'UPDATE buku SET id_perpus = ?, judul = ?, pengarang = ?, penerbit = ?, tahun_terbit = ? WHERE id_buku = ?';
    return db.query(query, [id_perpus, judul, pengarang, penerbit, tahun_terbit, id]);
};

export const deleteBuku = (id) => {
    return db.query('DELETE FROM buku WHERE id_buku = ?', [id]);
};

export const getBukuByPerpustakaanId = (id_perpus) => {
    return db.query('SELECT * FROM buku WHERE id_perpus = ?', [id_perpus]);
};      