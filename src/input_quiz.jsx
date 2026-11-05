import React, { useState } from 'react';

const label = { display: 'inline-block', width: '65px' };

function InputQuiz() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <div>
      <h2>Input Data</h2>
      <p>
        <span style={label}>Nama:</span>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama ..."
        />
      </p>
      <p>
        <span style={label}>Email:</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email ..."
        />
      </p>
      <p>
        <span style={label}>Alamat:</span>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat ..."
        />
      </p>

      <h3>Hasil Inputan:</h3>
      <p><b>Nama:</b> {nama}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Alamat:</b> {alamat}</p>
    </div>
  );
}

export default InputQuiz;