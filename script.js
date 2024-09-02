document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpeg",
        "02-09-Rotativo.png",
        "04-09-Rotativo.png",
        "10-09-GRC.png",
        "14-09-SAM.png",
        "16-09-VLM.png",
        "18-09-Rotativo.png",
        "18-09-Rotativo2.png",
        "19-09-Rotativo.png",
        "20-09-VLM.png",
        "21-09-VLM.png",
        "24-09-VLM.png",
        "26-09-MAP.png",
        "27-09-SGN.png",
        "27-09-VLM.png",
        "28-09-BTT.png",
        "28-09-Rotativo.png",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
