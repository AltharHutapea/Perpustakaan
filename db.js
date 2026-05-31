import mysql from "mysql2/promise";

// const pool = mysql.createPool({
//   host: "gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com",
//   user: "2n32FnfBzv4XyJi.root",
//   password: "GdNOFr9wpqZnn3ml",
//   database: "db_perpustakaan",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   port: 4000,
//   ssl: {
//     minVersion: 'TLSv1.2',
//     rejectUnauthorized: true
//   }
// });

const initConnection = await mysql.createConnection({
  host: "gateway01.ap-southeast-1.prod.alicloud.tidbcloud.com",
  user: "2n32FnfBzv4XyJi.root",
  password: "GdNOFr9wpqZnn3ml",
  port: 4000,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});
await initConnection.query("CREATE DATABASE IF NOT EXISTS db_perpustakaan");
await initConnection.end();

await pool.query(`
  CREATE TABLE IF NOT EXISTS perpustakaan (
    id_perpus INT PRIMARY KEY AUTO_INCREMENT,
    nama_perpus VARCHAR(100) NOT NULL,
    alamat TEXT,
    jam_buka VARCHAR(50),
    telepon VARCHAR(15),
    email VARCHAR(50)
  )
`);

await pool.query(`
  CREATE TABLE IF NOT EXISTS buku (
    id_buku INT PRIMARY KEY AUTO_INCREMENT,
    id_perpus INT NOT NULL,
    judul VARCHAR(150) NOT NULL,
    pengarang VARCHAR(100),
    penerbit VARCHAR(100),
    tahun_terbit INT,
    FOREIGN KEY (id_perpus) REFERENCES perpustakaan(id_perpus) ON DELETE CASCADE
  )
`);

console.log("Database dan tabel siap (pool)");
export default pool;
