function Tabel(props) {
    let menus = props.menu;
    let judul = props.judul;
    return (
        <div className="App">
            <div>
                <h2 className="text-white tal">{ judul }</h2>
                <table border="1px" cellPadding="8px" className="text-white tabelMenu">
                    <thead>
                        <tr>
                            <th>Menu</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((data) => (
                            <tr key={data.idmenu}>
                                <td>{ data.menu }</td>
                                <td>Rp. { data.harga }</td>
                            </tr>
                            // <li key={data.idmenu}><p className="isi">{ data.menu } harga : Rp. {data.harga }</p></li>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tabel;