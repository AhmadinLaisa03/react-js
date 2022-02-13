import { Link } from 'react-router-dom';
// const css = {
//     color : "rgb(255, 230, 0)"
// }

function Nav() {
    return (
        <div className="App">
            <ul>
                <li><Link className="isi nav-link" to="/">Home</Link></li>
                <li><Link className="isi nav-link" to="/kontak">Kontak</Link></li>
                <li><Link className="isi nav-link" to="/sejarah">Sejarah</Link></li>
                <li><Link className="isi nav-link" to="/tentang">Tentang</Link></li>
                <li><Link className="isi nav-link" to="/siswa">Siswa</Link></li>
                <li><Link className="isi nav-link" to="/menu">menu</Link></li>
            </ul>
        </div>
    );
}

export default Nav;