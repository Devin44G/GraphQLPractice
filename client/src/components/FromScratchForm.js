import React, {useState, useEffect} from 'react';
//fakeDataBase
const projects = [
  { title: 'A New Project', desctiption: 'A New Project description' },
  { title: 'Before We Start', desctiption: 'Before We Start description' },
  { title: 'Cool Project-1', desctiption: 'Cool Project-1 description' },
  { title: 'DealBreaker', desctiption: 'DealBreaker description' },
  { title: 'Effortless Stuff', desctiption: 'Effortless Stuff description' },
  { title: 'First Project', desctiption: 'First Project description' },
  { title: 'Good Times Project', desctiption: 'Good Times Project description' },
  { title: 'Hello World', desctiption: 'Hello World description' },
  { title: 'Is This For Real', desctiption: 'Is This For Real description' },
  { title: 'Just Kidding!', desctiption: 'Just Kidding! description' },
  { title: 'Love this Stuff', desctiption: 'Love this Stuff description' },
  { title: 'My New App', desctiption: 'My New App description' },
  { title: 'No More "Float: left"', desctiption: 'No More Float: left description' },
  { title: 'Obsolete Application', desctiption: 'Obsolete Application description' },
  { title: 'Pick a Better Name', desctiption: 'Pick a Better Name description' },
];

const tags= [
  'react',
  'complete',
  'in-progress',
  'failed',
  'success'
]

export const ScottsForm=  () => {
  const [formValue, setFormValue]= useState('');

  const handleChange= e => {
    setFormValue(e.target.value);
    console.log('handlechange: ', e.target.value);
  }//end handleChange

  return(

    <>
      <form 
        autocomplete= 'off'
        onSubmit= {e => {e.preventDefault()}}
        >
        <input 
          onChange= {handleChange}
          type= 'text'
          id= 'search'
          name= 'search'
          placeholder= 'Search'
          value= {formValue}
        />
      </form>
      {console.log('formValue: ', formValue)}
    </>

  )

}//end ScottsForm