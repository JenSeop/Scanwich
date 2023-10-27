import React, { useState, useEffect } from 'react';
import CHART from '../components1/CHART';


const Analysis= ()=> {


  const C= { height: 321 }
  const [data, setData]= useState(null);
  
  useEffect(() => {
    let URL= "https://raw.githubusercontent.com/scriptfetish/scriptfetish.github.io/main/test.json"
    let req= new XMLHttpRequest();
    req.open("GET", URL);
    req.onload= () => {
      var node= JSON.parse(req.response);
      setData(node);
    };
    req.send();
  }, []);

  if (data=== null) return <div className='Hello'>로딩</div>

  return (
    <div style= {C}>
      <CHART data= {data} />
    </div>
  );
}

export default Analysis;