// Update Biodata
function updateBiodata() {
    document.getElementById("namaDisplay").innerText =
        document.getElementById("inputNama").value;

    document.getElementById("nimDisplay").innerText =
        "NIM: " + document.getElementById("inputNIM").value;

    document.getElementById("prodiDisplay").innerText =
        "Program Studi: " + document.getElementById("inputProdi").value;

    document.getElementById("genderDisplay").innerText =
        "Jenis Kelamin: " + document.getElementById("inputGender").value;
}

// Hitung Nilai
function hitungNilai() {
    let matkul = document.getElementById("pilihMatkul").value;
    // Update tampilan mata kuliah
    document.getElementById("matakuliah").innerText =
        "Mata Kuliah: " + matkul;

    let tgs = parseFloat(document.getElementById("tugas").value) || 0;
    let k = parseFloat(document.getElementById("kuis").value) || 0;
    let uts = parseFloat(document.getElementById("uts").value) || 0;
    let uas = parseFloat(document.getElementById("uas").value) || 0;
    let absen = parseFloat(document.getElementById("absen").value) || 0;

    let nilaiAkhir =
        tgs * 0.2 +
        k * 0.15 +
        uts * 0.25 +
        uas * 0.35 +
        absen * 0.05;

    let grade = "D";

    if (nilaiAkhir > 81) grade = "A";
    else if (nilaiAkhir > 70) grade = "B";
    else if (nilaiAkhir > 60) grade = "C";

    document.getElementById("nilaiAkhir").innerText =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2);

    document.getElementById("gradeHuruf").innerText =
        "Grade: " + grade;
}

