function tambah() {
    let p = document.createElement("p");
    p.innerText = "ini paragraf yang akan di hapus";
    p.id = "hapusnya";
    document.getElementById("container").appendChild(p);

}

function hapus() {
    let container = document.getElementById("container");
    let target = document.getElementById("hapusSaya");
    if (target){
        container.removeChild(target);
    } else{
        alert("paragraf belum ada atau sudah dihapus.");
    }
}