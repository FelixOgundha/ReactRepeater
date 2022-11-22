import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    let newfield = { name: '', age: '' }
    setInputFields([...inputFields, newfield])

  }

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }

  return (
    <div className="App" style={{ height: '100vh' }} >
      <div className='d-flex w-100 h-100 bg-info justify-content-center align-items-center'>
        <form onSubmit={submit}>
          <div className='d-flex align-items-center flex-column'>
            {inputFields.map((input, index) => {
              return (
                <div key={index} className="mb-2">

                  <input
                    name='name'
                    placeholder='Name'
                    value={input.name}
                    onChange={event => handleFormChange(index, event)}
                    className="py-2"
                  />

                  <input
                    name='age'
                    placeholder='Age'
                    value={input.age}
                    onChange={event => handleFormChange(index, event)}
                    className="py-2 ms-2"
                  />

                  <button className='px-4 btn btn-warning ms-2 py-2' onClick={addFields}>Add</button>
                  <button className='px-4 btn btn-danger ms-2 py-2' onClick={() => removeFields(index)}>Remove</button>
                </div>
              )
            })}

          </div>
          <button onClick={submit} className='px-4 btn btn-primary ms-2 py-2 mt-3'>Submit</button>
        </form>
      </div>

    </div>
  );
}

export default App;
