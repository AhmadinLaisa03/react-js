import { useState } from 'react';
import Tabel from './Tabel';

function Menu() {
    // eslint-disable-next-line no-unused-vars
    let [menus, setMenu] = useState([
        {
        idmenu: 19, idkategori: 27, menu: "Sate Kambing", gambar: "Sate kambing.jpg", harga: 9000
        },
        {
            idmenu: 20, idkategori: 28, menu: "Es Jeruk", gambar: "es jeruk.jpg", harga: 6000
        },
        {
            idmenu: 21, idkategori: 28, menu: "Es Joger", gambar: "es joger.jpg", harga: 8000
        },
        {
            idmenu: 22, idkategori: 28, menu: "Es Jus", gambar: "es jus.jpg", harga: 8000
        },
        {
            idmenu: 23, idkategori: 28, menu: "Seblak", gambar: "Seblak.jpg", harga: 10000
        },
    ]);

    let judul = "Data Menu Restoran";

    return (
        <div className="App">
            <h1 className="AppTitle">Menu Restoran</h1>
            <Tabel menu={ menus } judul={ judul }/>
        </div>
    );
}

export default Menu;