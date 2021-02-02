import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from "./components/Form";
import Result from "./components/Result";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [results, setResults ] = useState({});
  const kurs = 15000;
  const tarifBM = .075;
  const tarifPPN = .1;
 
  const calculate = ( { hargaBarang, ongkir, asuransi } ) =>{   

    const nilaiPabean = hargaBarang*kurs + ongkir*kurs + asuransi*kurs;
    console.log('nilai pabean',nilaiPabean);
    
    const beaMasuk = tarifBM * nilaiPabean;
    console.log('beaMasuk', beaMasuk);
    
    const nilaiImport =  nilaiPabean + beaMasuk;
    console.log('nilai import', nilaiImport);
    
    const PPN = tarifPPN * nilaiImport;
    console.log('ppn',PPN);
    
    const total = beaMasuk + PPN;
    console.log('total',total);
    
    setResults({nilaiPabean, beaMasuk, nilaiImport, PPN, total});
   }
    
  return (
    <Router>
      <div className="container">
          <Header/>
          <Route 
            path='/'
            exact
            render={(props)=>(
              <>
              <Form onInput={calculate}/>
              <Result results={results}/>
              </>
            )}
          />
          
          <Route path='/about' component={About}/>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
