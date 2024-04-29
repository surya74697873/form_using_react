import './App.css'
import {useState} from 'react'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState(
    { C : false,
     CPP: false,
    Java : false,
    Python : false}
  )
  const [resume, setResume] = useState('');
  const [link, setLink] = useState('')
  const [about, setAbout] = useState('')

  const handleLanguageSelection = (sub) => {
    setLanguage((prev) =>({...prev,[sub] : !prev[sub]})
  )}

  const handleFormReview= (e) => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(contact)
    console.log(gender)
    console.log(language)
    console.log(resume)
    console.log(link)
    console.log(about)

  }
  const handleResetForm = () => {
    setFirstName('')
    setLanguage('')
    setLastName('')
    setAbout('')
    setContact('')
    setEmail('')
    setGender('')
    setLink('')
    setResume('')
    setLanguage({
      C : false,
      CPP : false,
      Java : false,
      Python : false
    })
  }

  return (
    <div className='App'>
      <fieldset>
      <h1>Form Using React</h1>
      <form action='' method='get'>
        <label for="first_name">First Name</label>
        <input id='first_name' placeholder='Enter First Name' type='text' value={firstName} onChange={(e) =>setFirstName(e.target.value)} required></input>
        <label for='last_name'>Last Name</label>
        <input id='last_name' placeholder='Enter Last Name' type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}required></input>
        <label for='email'>Enter Email</label>
        <input id='email' placeholder='Enter Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input> 
        <label for='contact'>Contact</label>
        <input id='contact' placeholder='Enter Mobile Number' type='tel' pattern='+91-[0-9]{10}' value={contact} onChange={(e)=>setContact(e.target.value)} required></input>
        <label for='gender'>Gender</label>
        <input type='radio' name='gender' id='male' value="male" onChange={(e)=>setGender(e.target.value)} checked={ gender === 'male'} ></input>
        Male
        <input type='radio' name='gender' id='female' value="female" onChange={(e)=>setGender(e.target.value)} checked={gender==='female'}></input>
        Female
        <label for='programming_language'>Programing Language</label>
        <input id='C' name='programming_language' type='checkbox' onChange={()=>handleLanguageSelection('C')}></input>C
        <input id='CPP' name='programming_language' type='checkbox' onChange={()=>handleLanguageSelection('CPP')}></input>CPP
        <input id='Java' name='programming_language' type='checkbox' onChange={()=>handleLanguageSelection('Java')}></input>Java  
        <input id='Python' name='programming_language' type='checkbox' onChange={()=>handleLanguageSelection('Python')}></input>Python
        <label for='resume'>Resume</label>
        <input id='resume' type='file' onChange={(e)=>setResume(e.target.files[0])} required></input>
        <label for='link'>Enter URL</label>
        <input id='link' type='text' placeholder='www.google.com' onChange={(e)=>setLink(e.target.value)}></input>
        <label for='about'></label>
        <input id='about' type='textarea' placeholder='About Your Self' onChange={(e)=>setAbout(e.target.value)} required></input>
        <label>Submit or Reset</label>
        <button type='reset' onClick={handleResetForm}>Reset</button>
        <button type='submit' onClick={handleFormReview}>Submit</button>
      </form>
      </fieldset>
    </div>
    
  );
}

export default App;
