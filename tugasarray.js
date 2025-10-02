let mahasiswa = ["farda", "Ari", "Fatur", "Intan", "Nazwa"];

console.log("Daftar mahasiswa:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

mahasiswa.push("Yuda");

mahasiswa.shift();

console.log("Setelah dimodifikasi:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}
