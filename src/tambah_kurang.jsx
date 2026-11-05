import React, { useState } from 'react';

const tombol = {
  borderRadius: '6px',
  border: '1px solid #767676',
  padding: '2px 6px',
  cursor: 'pointer',
};

function TambahKurang() {
  const [hitung, setHitung] = useState(0);

  return (
    <div>
      <h2>Penambahan dan Pengurangan</h2>
      <h2>Hasil Hitungan: {hitung}</h2>
      <button style={tombol} onClick={() => setHitung(hitung + 1)}>Tambah</button>
      <button style={tombol} onClick={() => setHitung(hitung - 1)}>Kurang</button>
    </div>
  );
}

export default TambahKurang;