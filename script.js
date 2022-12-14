let tombol = document.getElementById('btn');

tombol.addEventListener('click', function() {

    const tinggi = parseInt(document.getElementById('tinggi').value);
    const berat = parseInt(document.getElementById('berat').value);
    const hasil = document.getElementById('output');
    let tinggiStatus = false, beratStatus = true;

    if(tinggi === '' || isNaN(tinggi) || (tinggi <= 0)) {
        document.getElementById('tinggi_error').innerHTML = '';
    } else {
        document.getElementById('tinggi_error').innerHTML = '';
        tinggiStatus = true;
    }

    if(berat === '' || isNaN(berat) || (berat <= 0)) {
        document.getElementById('berat_error').innerHTML = '';
    } else {
        document.getElementById('berat_error').innerHTML = '';
        beratStatus = true;
    }

    if(tinggiStatus && beratStatus) {
        const bmi = (berat / ((tinggi*tinggi)/10000)).toFixed(2);

        if(bmi < 18.5) {
            hasil.innerHTML = 'Berat badan kamu kurang (Underweight) : ' + bmi;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            hasil.innerHTML = 'Berat badan kamu normal (Normal Weight) : ' + bmi;
        } else if (bmi >= 25 && bmi <= 29.9) {
            hasil.innerHTML = 'Berat badan kamu over (Over Weight) : ' + bmi; 
        } else {
            hasil.innerHTML = 'Berat badan kamu sangat over (Obesity) : ' + bmi;
        }
    } else {
        alert('Masukan angka yang valid');
        hasil.innerHTML = '';
    }

});