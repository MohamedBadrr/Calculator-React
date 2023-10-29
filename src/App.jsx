
import { useState } from 'react';
import './App.css';

function App() {

  const [result , setResult] = useState("");
  const handleClick = (e)=>{
    setResult(result.concat(e.target.name).concat(e.target.value))
  }
  const clear = ()=>{ 
      setResult("");
  }
  const backspace = ()=>{
    setResult(result.slice(0,-1))
  }

  // ----------  this is the first logic to do any operation on only 2 digits. ----------

  // const getresult = ()=>{
  //   let indexofOperation;
  //   let num1 , num2 ;
  //   let operation ;
  //   let finalResult ;
  //   for(let i=0; i<=result.length ; i++){
  //     if(result[i]=="+" || result[i]=="-" || result[i]== "x" || result[i]=="/" || result[i]=="*"){
  //       operation = result[i];
  //       indexofOperation = i;
  //     }
  //   }
  //   num1 = Number(result.slice(0,indexofOperation));
  //   num2 = Number(result.slice(indexofOperation+1,));
  //   if(operation == "+"){
  //     finalResult = num1 + num2 ;
  //   }
  //   else if(operation == "-"){
  //     finalResult = num1 - num2 ;
  //   }
  //   else if(operation == "/"){
  //     finalResult = num1 /num2 ;
  //   }
  //   else if(operation == "x" || operation == "*" ){
  //     finalResult = num1 * num2 ;
  //   }
    
  //    if (finalResult != null){
  //     finalResult=finalResult.toString();
  //    }
  //    else{
  //     finalResult = result;
  //    }
  //   try{
  //     setResult(finalResult)
  //   } catch(err){
  //     setResult(err.toString())
  //   }
  // }

  //--------------------------------------------------------------------------------------------------------------------------------------------------
  
  // ----------  this is the second logic with eval function to do any operation  ----------
  // ----------                      on many digits .                             ----------

  const getresult = ()=>{
    try{
      let finalResult  = eval(result);
     if (finalResult != null){
      finalResult=finalResult.toString();
     }
     else{
      finalResult = result;
     }
      setResult(finalResult)
    } catch(err){
      setResult("Wrong Operation")
    }
  }

  return (
    <>
    <h1 className='text-center'>SIMPLE CALCULATOR</h1>
    <div className="App">
      <div className='calculator'>
        <form action="" >
          <input type="text"  id="" value={result} onChange={(e)=>{setResult(e.target.value)}}  className='' />
        </form>

        <div className='row px-3'>
          <div className='col-md-6 px-2 '> <button onClick={clear} className='w-100 m-0 opBtn clear text-center'>Clear</button></div>
          <div className='col-md-3 ps-2 '> <button onClick={backspace} className='w-100  m-0 opBtn c'>c</button></div>
          <div className='col-md-3 pe-2 '> <button name='/' onClick={handleClick} className='w-100  m-0 opBtn operation' >/</button></div>
        </div>

        <div className='row my-2 px-3'>
          <div className='col-md-3  pe-2'> <button name='7' onClick={handleClick} className='w-100 m-0'>7</button></div>
          <div className='col-md-3  px-2 ' > <button name='8' onClick={handleClick} className='w-100  m-0'>8</button></div>
          <div className='col-md-3  ps-2'> <button name='9' onClick={handleClick} className='w-100  m-0'>9</button></div>
          <div className='col-md-3  pe-2'> <button name='*' onClick={handleClick} className='w-100  m-0 opBtn operation'>*</button></div>
         </div>

         <div className='row my-2 px-3'>
          <div className='col-md-3  pe-2'> <button name='4' onClick={handleClick} className='w-100 m-0'>4</button></div>
          <div className='col-md-3  px-2 ' > <button name='5' onClick={handleClick} className='w-100  m-0'>5</button></div>
          <div className='col-md-3  ps-2'> <button name='6' onClick={handleClick} className='w-100  m-0'>6</button></div>
          <div className='col-md-3  pe-2'> <button name='-' onClick={handleClick} className='w-100  m-0 opBtn operation' >-</button></div>
         </div>

         <div className='row my-2 px-3'>
          <div className='col-md-3  pe-2'> <button name='1' onClick={handleClick} className='w-100 m-0'>1</button></div>
          <div className='col-md-3  px-2 ' > <button name='2' onClick={handleClick} className='w-100  m-0'>2</button></div>
          <div className='col-md-3  ps-2'> <button name='3' onClick={handleClick} className='w-100  m-0'>3</button></div>
          <div className='col-md-3  pe-2'> <button name='+' onClick={handleClick} className='w-100  m-0 opBtn operation'>+</button></div>
         </div>

         <div className='row px-3'>
          <div className='col-md-3 pe-2'> <button name='0' onClick={handleClick} className='w-100  m-0'>0</button></div>
          <div className='col-md-3 px-2 '> <button name='.' onClick={handleClick} className='w-100  m-0 dot'>.</button></div>
          <div className='col-md-6 ps-2 '> <button onClick={getresult} className='w-100 m-0 opBtn resultOp'>=</button></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
