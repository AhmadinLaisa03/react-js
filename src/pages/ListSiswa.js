function ListSiswa(props) {
    let siswa = props.nama.map((i, item) =>
        <li key={item}><h1 className="AppTitle">{i}</h1></li>
    );

    return (
        <div className="App">
            {/* <h1 className="AppTitle">{props.nama[1]}</h1> */}
            <ul>
                {siswa}
            </ul>
        </div>
    );
}

export default ListSiswa;