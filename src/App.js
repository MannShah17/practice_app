import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Routes, Route } from 'react-router-dom';

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils- Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils- Light Mode';
    }
  };

  const greenToggleMode = () => {
    if (mode === 'light') {
      setGreenMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert('Green mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [greenMode, setGreenMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title='TextUtils'
        mode={mode}
        greenMode={greenMode}
        toggleMode={toggleMode}
        greenToggleMode={greenToggleMode}
      />
      <Alert alert={alert} />
      <div className='container'>
        {/* <Routes> */}
        {/* <Route path='/about' element={<About />} /> */}
        <TextForm
          alert={showAlert}
          heading='Enter a text below to analyze'
          mode={mode}
        />
        {/* <Route
            path='/'
            element={
              <TextForm
                alert={showAlert}
                heading='Enter a text below to analyze'
                mode={mode}
              />
            } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
