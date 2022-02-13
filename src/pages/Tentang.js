import { useState } from 'react';

function Tentang() {
    let [count, setCount] = useState(0);

    function tambah() {
        setCount(count+1);
    }

    function kurang() {
        if (count === 0) return;
        setCount(count-1);
    }

    return (
        <div className="App">
            <h1 className="AppTitle">Counter : { count }</h1>
            <p className="isi">Isi Tentang</p>
            <button onClick={tambah} className="btn btn-success">Tambah</button>
            <button onClick={kurang} className="btn btn-warning">Kurang</button>
        </div>
    );
}

export default Tentang;