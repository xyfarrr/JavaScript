let totalBelanja = 180000;

function hitungDiskon() {
    if (totalBelanja > 100000) {
        let potongan = totalBelanja * 0.10;
        return totalBelanja - potongan;
    } else {
        return totalBelanja;
    }
}

console.log("Total belanja sebelum diskon: Rp. " + totalBelanja);
console.log("Total yang harus dibayar: Rp. " + hitungDiskon());
