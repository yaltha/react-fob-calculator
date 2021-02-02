import {useState} from 'react';

const Form = ({onInput}) => {
    const [hargaBarang, setHargaBarang] = useState('')
    const [ongkir, setOngkir] = useState('')
    const [asuransi, setAsuransi] = useState('')
    
    const onSubmit = e => {
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault();
        if(!hargaBarang){alert('Lengkapi data formulir')}
        onInput({hargaBarang, ongkir, asuransi})
        setHargaBarang('')
        setOngkir('')
        setAsuransi('')
    }
    return (
        <form className='input-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Masukkan Harga Barang:</label>
                <input 
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Masukkan harga beli barang..."
                    value={Number(hargaBarang)}
                    onChange={e=>setHargaBarang(e.target.value)}
                    />
            </div>
            <div className="form-control">
                <label>Ongkos Pengiriman:</label>
                <input 
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Masukkan ongkos pengiriman barang..."
                    value={Number(ongkir)}
                    onChange={e=>setOngkir(e.target.value)}
                    />
            </div>
            <div className="form-control">
                <label>Asuransi:</label>
                <input 
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Masukkan biaya asuransi barang..."
                    value={Number(asuransi)}
                    onChange={e=>setAsuransi(e.target.value)}
                    />
            </div>
            <input type="submit" value="Hitung" className="btn btn-block"/>
        </form>
    )
}

export default Form
