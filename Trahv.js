function arvuta(lubatud, tegelik) {
    return Math.min(190, (tegelik - lubatud) * 3);
}

function trahv() {

    let nimi = document.getElementById("nimi").value;
    let lubatud_kiirus = document.getElementById("lkiirus").value;
    let tegelik_kiirus = document.getElementById("tkiirus").value;

    let summa = arvuta(lubatud_kiirus, tegelik_kiirus);

    document.getElementById('tulemus').innerHTML = `<h1>${nimi ? nimi : "Tere"}, kiiruse أ¼letamise eest on teie trahv
                    <u>${summa} eurot</u>.</h1>`;
}