import DataTable from 'components/DataTable';
import Footer from 'components/footer';
import Navbar from 'components/navBar';
import React from 'react';

function App() {
  return (
    <>
    <Navbar/>

    <div className="container">
       <h1>ola mundo</h1>
       <DataTable/>
    </div>
    
    <Footer/>
    </>
  );
}

export default App;
