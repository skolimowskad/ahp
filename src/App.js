import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Slidery from './Slidery';
import { useState } from 'react';
import AHP from 'ahp';
import styled from 'styled-components';
import { SaatyPewnosc } from './Obliczenia';

function App() {

  const Button =styled.button`
    background-color: rgb(247,188,80);
    color: white;
    font-size: 15px;
    padding: 20px 50px;
    border-radius: 20px;
    margin: 10px 75%;
    cursor: pointer;
    border-width: 0;
  `

  const [firstName, setFirstName] = useState('A');
  const [secondName, setSecondName] = useState('B');
  const [thirdName, setThirdName] = useState('C');

  const [slider12, setSlider12] = useState(0);
  const [slider13, setSlider13] = useState(0);
  const [slider23, setSlider23] = useState(0);

  const [values12, setValues12] = useState([]);
  const [values13, setValues13] = useState([]);
  const [values23, setValues23] = useState([]);
  const [finalResults, setFinalResults] = useState([]);

  const [CR, setCR] = useState('');
  const [CI, setCI] = useState('');
  const [vector, setVector] = useState([]);

  const ahpContext = new AHP();
  ahpContext.addItems([firstName, secondName, thirdName]);
  ahpContext.addCriterion('wazniejsze')

  /*ahpContext.rankCriteriaItem('wazniejsze',[
    [firstName, secondName, 1],
    ['A', 'B', 3],
    ['B', 'C', 9]
  ])*/

  const oblicz = () => {
    /*const output = ahpContext.run();
    console.log(output);
    setCR((output.criteriaRankMetaMap).cr);
    setCI((output.criteriaRankMetaMap).ci);
    setVector(output.rankedScoreMap);
    console.log(z.length);*/
    const helper = [];

    setValues12(SaatyPewnosc(slider12));
    setValues13(SaatyPewnosc(slider13));
    setValues23(SaatyPewnosc(slider23));

    let index = 0;

    for (let i=0; i<values12.length; i++) {
      for (let j=0; j<values13.length; j++) {
        for (let k=0; k<values23.length; k++) {
          ahpContext.rankCriteriaItem('wazniejsze',[
            [firstName, secondName, values12[i].wartosc],
            [firstName, thirdName, values13[j].wartosc],
            [secondName, thirdName, values23[k].wartosc]
          ]);
          const output = ahpContext.run();
          helper.push({
            idx: index,
            value12: values12[i].wartosc,
            value13: values13[j].wartosc,
            value23: values23[k].wartosc,
            confidence: values12[i].pewnosc * values13[j].pewnosc * values23[k].pewnosc,
            cr: ((output.itemRankMetaMap).wazniejsze).cr,
            ci: ((output.itemRankMetaMap).wazniejsze).ci,
            vector: output.rankedScoreMap
          })
          index = index+1;
        }
      }
    }
    console.log(helper);
    setFinalResults(helper);
  }

  const fs = require('fs');
  const sciezkaPlikow = './zapisanePliki/dane.js'

  const zapis = (dane, sciezka) => {
    try {
      fs.writeFileSync(sciezka, JSON.stringify(dane))
    } catch (err) {
      console.log(err)
    }
  };

  module.exports(zapis)

  return (
    <div className='app'>
      <Header />
      <div className='kontenerek'>
        <div className='komponentSliderow'>
          <Slidery startName={firstName} endName={secondName} sliderValue={slider12} setSliderValue={setSlider12}/>
          <Slidery startName={firstName} endName={thirdName} sliderValue={slider13} setSliderValue={setSlider13}/>
          <Slidery startName={secondName} endName={thirdName} sliderValue={slider23} setSliderValue={setSlider23}/>
        </div>
      </div>
      <Button onClick={()=>oblicz()}>Oblicz</Button>
      <div className='wyniki'>
        {
          finalResults.map(wynik=> (
            <div key={wynik.idx} className='wynik'>
              <h1 style={{color:'white'}}>Wariant {wynik.idx+1}</h1>
              <div className='dane'>
                <div className='sekcja'>
                  <h3>Macierz</h3>
                  <table>
                    <tr>
                      <td></td>
                      <td className='nazwa'>{firstName}</td>
                      <td className='nazwa'>{secondName}</td>
                      <td className='nazwa'>{thirdName}</td>
                    </tr>
                    <tr>
                      <td className='nazwa'>{firstName}</td>
                      <td className='liczba'>1.00</td>
                      <td className='liczba'>{(wynik.value12).toFixed(2)}</td>
                      <td className='liczba'>{(wynik.value13).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='nazwa'>{secondName}</td>
                      <td className='liczba'>{(1/(wynik.value12)).toFixed(2)}</td>
                      <td className='liczba'>1.00</td>
                      <td className='liczba'>{(wynik.value23).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='nazwa'>{thirdName}</td>
                      <td className='liczba'>{(1/(wynik.value13)).toFixed(2)}</td>
                      <td className='liczba'>{(1/(wynik.value23)).toFixed(2)}</td>
                      <td className='liczba'>1.00</td>
                    </tr>
                  </table>
                </div>
                <div className='sekcja'>
                  <h3>Wektor wag</h3>
                  <table>
                    <tr>
                      <td className='nazwa'>Kryterium</td>
                      <td className='nazwa'>Waga</td>
                    </tr>
                    <tr>
                      <td className='liczba'>{firstName}</td>
                      <td className='liczba'>{((wynik.vector).A).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='liczba'>{secondName}</td>
                      <td className='liczba'>{((wynik.vector).B).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='liczba'>{thirdName}</td>
                      <td className='liczba'>{((wynik.vector).C).toFixed(2)}</td>
                    </tr>
                  </table>
                </div>
                <div className='sekcja'>
                  <h3>Dodatkowe informacje</h3>
                  <table>
                    <tr>
                      <td className='nazwa'>Współczynnik</td>
                      <td className='nazwa'>Wartość</td>
                    </tr>
                    <tr>
                      <td className='liczba'>CR</td>
                      <td className='liczba'>{(wynik.cr).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='liczba'>CI</td>
                      <td className='liczba'>{(wynik.ci).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className='liczba'>Pewność</td>
                      <td className='liczba'>{(wynik.confidence).toFixed(2)}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          ))
        }
        <Button onClick={()=>zapis(finalResults, sciezkaPlikow)}>Zapisz</Button>
      </div>
    </div>
  );
}

export default App;
