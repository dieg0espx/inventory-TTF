import React, {useEffect, useState, useRef} from 'react'
import shore from '../images/cover.png'

function Login() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const [number4, setNumber4] = useState();
  const [data, setData]=useState([]);

  let fetchURL = process.env.REACT_APP_GOOGLESHEETURL;

  function getCodes(){
    fetch(fetchURL)
    .then(response=>response.json())
    .then(response=>setData(response))
  }
  
  useEffect(()=>{ 
    getCodes()
  },[])

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

   const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function clickLogin(){
    let number = `${number1}${number2}${number3}${number4}`
    let found = false
    let matchingRow = null;
    for(let i = 0; i < data.length; i ++){ 
      if(parseInt(number)==data[i][0]){
        let company = data[i][1]
        let jobsite = data[i][2]
        matchingRow = data[i];
        matchingRow[0] = ''
        matchingRow[1] = ''
        matchingRow[2] = ''
        found = true
        window.location.href = './#/printableSheet?code='+number+'&&elements='+matchingRow + '&&company=' + company + '&&jobsite=' + jobsite;
      }
    }
    if(!found){
      alert("Code not foud, try again")
      setNumber1('')
      setNumber2('')
      setNumber3('')
      setNumber4('')
      inputRefs[0].current.focus(); // Focus on the first input field
    }
  }
    
    return (
    <div className='wrapper-login'>
      <div id="left">
        <h2> Customers </h2>
        <p> Enter your 4-digit access code </p>
        <div className='codes'>
          <input type="tel" 
            value={number1} 
            maxLength={1}   
            onChange={(e) => {
              setNumber1(e.target.value);
              handleInputChange(e, 0);
            }}
            ref={inputRefs[0]}
          />
          <input type="tel" 
            value={number2} 
            maxLength={1}   
            onChange={(e) => {
              setNumber2(e.target.value);
              handleInputChange(e, 1);
            }}
            ref={inputRefs[1]}
          />
          <input type="tel" 
            value={number3} 
            maxLength={1}   
            onChange={(e) => {
              setNumber3(e.target.value);
              handleInputChange(e, 2);
            }}
            ref={inputRefs[2]}
          />
          <input type="tel" 
            value={number4} 
            maxLength={1}   
            onChange={(e) => {
              setNumber4(e.target.value);
              handleInputChange(e, 3);
            }}
            ref={inputRefs[3]}
          />

        </div>
        <button onClick={clickLogin}>Login</button>
      </div>
      <div id="right">
        <img src={shore} />
      </div>
    </div>
  );
}

export default Login