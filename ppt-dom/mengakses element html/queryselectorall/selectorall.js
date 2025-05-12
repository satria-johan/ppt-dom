function ubahsemua() {
    let semuakotak = document.querySelectorAll(".kotak");
    semuakotak.forEach((kotak) => {
        kotak.style.backgroundColor = "lightblue";
        kotak.style.padding = "10px";
        kotak.style.margin = "5px";
    });
}
