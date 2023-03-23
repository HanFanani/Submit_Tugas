// ditujukan agar setelah kalkulasi website tidak refresh
var form = document.getElementById("form");

// fungsi untuk mereset kolom
function handleForm(event) {
    event.preventDefault();
    calculateBMI(); }


// fungsi untuk mereset nilai dalam kolom form
function refreshPage(){
    window.location.reload ();
}

// function resetBMI (event) {
// var result = document.getElementById("result")
// result.innerHTML="00.00"
// event.preventDefault();
// }
// if (form-group){
//    form-group.addEventListener('submit', handleForm);
//    form-group.addEventListener('reset', resetBMI);
// }

// fungsi kalkulasi
function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var gender = document.getElementById("gender").value;
    let resultArea = document.querySelector("comment", "comment2");
    const result = document.getElementById("result");

    // mengecek input 
    if (isNaN(weight) || isNaN(height) || gender === "") {
		alert("Please enter valid input values.");
		return false;
    }

    // konversi tinggi badan ke meter
    height /= 100;

    // rumus kalkulasi BMI
    let bmi = weight / (height * height);

    // pembulatan hasil BMI menjadi 2 angka desimal di belakang koma
    bmi = bmi.toFixed(2);

    // Kategori BMI berdasarkan jenis kelamin
    let category = '';
    if(gender === "p"){

        if (bmi<18.5){
            category = 'Berat badan kurang !';
        }else if (bmi < 24.9){
            category = 'Berat badan Ideal !';
        }else if (bmi < 29.9){
            category = 'Berat badan berlebih !';
        }else if (bmi > 30.0){
            category = 'Obesitas !';
        }
 
    }else if(gender === "w"){

        if (bmi<18.5){
            category = 'Berat badan kurang !';
        }else if (bmi < 24.9){
            category = 'Berat badan Ideal !';
        }else if (bmi < 29.9){
            category = 'Berat badan berlebih !';
        }else if (bmi > 30.0){
            category = 'Obesitas !';
        }
    }

    // Keterangan hasil BMI
    let explain = '';
    if(gender === "p"){

        if (bmi<18.5){
            explain = 'Kamu berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah dengan mengkonsumsi makan kaya protein dan berolahraga. Jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk meningkatkan berat badan hingga batas normal.'
        }else if (bmi < 24.9){
            explain = 'Kamu berada dalam kategoti normal atau berat badan ideal. Terus jaga pola makan dan berolahraga agar tubuh tetap sehat dan bugar.'
        }else if (bmi < 29.9){
            explain = 'Anda berada dalam kategori Overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'
        }else if (bmi > 30.0){
            explain = 'Anda berada dalam kategori Obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan secara ekstra hingga batas normal.'
        }
 
    }else if(gender === "w"){

        if (bmi<18.5){
            explain = 'Kamu berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah dengan mengkonsumsi makan kaya protein dan berolahraga. Jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk meningkatkan berat badan hingga batas normal.'
        }else if (bmi < 24.9){
            explain = 'Kamu berada dalam kategoti normal atau berat badan ideal. Terus jaga pola makan dan berolahraga agar tubuh tetap sehat dan bugar.'
        }else if (bmi < 29.9){
            explain = 'Anda berada dalam kategori Overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'
        }else if (bmi > 30.0){
            explain = 'Anda berada dalam kategori Obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan secara ekstra hingga batas normal.'
        }
    }

    // informasi peringatan agar hasil BMI bisa ditampilkan
    result.innerHTML = bmi;
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = 'Anda <span id="comment">${category}</span>';
    document.querySelector(".comment2").innerHTML = '<span id="comment2">${explain}</span>';
    document.querySelector("#result").innerHTML = bmi;

    // menampilkan form hasil
    document.getElementById("form2").classList.remove("hide-columnbmi");

}
