const Result = ({results}) => {
    return (
        <div>
            <h1>Details</h1>
            <p className='result-detail'>Nilai Pabean: { results.nilaiPabean ? `Rp ${ results.nilaiPabean }` : "Rp 0"}</p>
            <p className='result-detail'>Bea Masuk: { results.beaMasuk ? `Rp ${ results.beaMasuk }` : "Rp 0"}</p>
            <p className='result-detail'>Nilai Import: { results.nilaiImport ? `Rp ${ results.nilaiImport }` : "Rp 0"}</p>
            <p className='result-detail'>PPN (10%): { results.PPN ? `Rp ${ results.PPN }` : "Rp 0"}</p>
            <p className='result-detail'>Total Bayar: { results.total ? `Rp ${ results.total }` : "Rp 0"}</p>
        </div>
    )
}

export default Result
