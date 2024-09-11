function hitungLuas() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById("result").innerText = "Form masih kosong!";
        return;
    }

    let result = 0.5 * alas * tinggi;

    document.getElementById("result").innerText = 
        `L = 1/2 x a x t\n` +
        `L = 1/2 x ${alas} x ${tinggi}\n` +
        `L = ${result}`;
}

function hitungKeliling() {

    let s1 = parseFloat(document.getElementById("sisiA").value);
    let s2 = parseFloat(document.getElementById("sisiB").value);
    let s3 = parseFloat(document.getElementById("sisiC").value);


    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        document.getElementById("keliling-result").innerText = "Form masih kosong!";
        return;
    }


    let result = s1 + s2 + s3;


    document.getElementById("keliling-result").innerText = 
        `K = S1 + S2 + S3\n` +
        `K = ${s1} + ${s2} + ${s3}\n` +
        `K = ${result}`;
}