function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "arbok.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar vaporeon.png";
        alert("arbok.jpg");
    } else if (picker == "water") {
        images.src = "blastoise.jpg";
        images.width = 300;
        images.alt = "blastoise.jpg";
        alert("blastoise");
    } else if (picker == "electric") {
        images.src = "bulbasaur.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar jolteon.png";
        alert("bulbasaur.jpg");
    } else if (picker == "dark") {
        images.src = "charizard.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar umbreon.png";
        alert("charizar.jpg");
    } else if (picker == "psyhic") {
        images.src = "charmeleon.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar espeon.png";
        alert("charmeleon.jpg");
    } else if (picker == "fairy") {
        images.src = "pidgeotto.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar sylveon.png";
        alert("pidgeotto.jpg");
    } else if (picker == "grass") {
        images.src = "pikachu.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar leafeon.png";
        alert("pikachu.jpg");
    } else if (picker == "ice") {
        images.src = "wartortle.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar glaceon.png";
        alert("wartortle.jpg");
    } else {
        alert("Gagal");
    }
}