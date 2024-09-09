function hitungLuas() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById("result").innerText = "Masukkan nilai alas dan tinggi yang valid!";
        return;
    }

    let result = 0.5 * alas * tinggi;

    document.getElementById("result").innerText = 
        `L = 1/2 x a x t\n` +
        `L = 1/2 x ${alas} x ${tinggi}\n` +
        `L = ${result}`;
}