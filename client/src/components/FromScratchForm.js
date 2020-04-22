//this is still under construction... not working properly

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
  const [searchTerm, setSearchTerm]= useState([]);
  const [filtered, setFiltered]= useState(projects);


  const handleChange= e => {
    setFormValue(e.target.value);
  }//end handleChange

  const handleKeyDown= e => {
    //listen for 'Enter' and submit
    if( e.key === 'Enter' ){
      //submit on 'Enter'
      handleSubmit(e);
    }
  }//end handleKeyDown

  const handleSubmit= e => {
    e.preventDefault();
    setSearchTerm( formValue.toLowerCase() );
    setFormValue('')

    let temp= filtered.filter(ele => {
      return ele.title.toLowerCase().includes(searchTerm)
    })
    setFiltered(temp);

  }//end handleSubmit

  useEffect(() => {
    console.log('effect fired!')
  }, [filtered])



  return(
    <>
      <form 
        autoComplete= 'off'
        onSubmit= {handleSubmit}
        >
        <input
          onChange= {handleChange}
          onKeyDown={handleKeyDown}
          type= 'text'
          id= 'search'
          name= 'search'
          placeholder= 'Search'
          value= {formValue}
        />
      </form>

      <div className= 'dataDisplay'>
        {filtered.map(project => {
          return (<div key= {Date.now() * Math.random()}>
            {project.title}
            <br /><br />
          </div>)
        })}
      </div>
      {console.log('searchTerm: ', searchTerm)}
      {console.log('filtered: ', filtered)}
      {console.log('formValue: ', formValue)}
    </>
  )
}//end ScottsForm