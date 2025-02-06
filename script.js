document.addEventListener("DOMContentLoaded", function() {
    let nama = prompt("Masukkan nama kamu:");
    if(nama) {
        localStorage.setItem("nama", nama); // Simpan nama di localStorage
        document.getElementById("nama").innerText = nama;
    }
});

function toggleHeart(heart) {
    if (heart.innerText === "🤍") {
        heart.innerText = "❤️";
    } else {
        heart.innerText = "🤍";
    }
    
    checkAllHearts();
}

function checkAllHearts() {
    let hearts = document.querySelectorAll(".heart");
    let allClicked = true;

    hearts.forEach(heart => {
        if (heart.innerText !== "❤️") {
            allClicked = false;
        }
    });

    if (allClicked) {
        setTimeout(() => {
            window.location.href = "hbd.html"; // Pindah ke halaman HBD
        }, 1000);
    }
}