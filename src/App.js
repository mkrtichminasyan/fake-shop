import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import ProductPage from "./components/ProductPage";
import Box from '@mui/material/Box'

function App() {
  return (
    
      <>
      <Box sx={{mb:4}}>
        <NavBar />
      </Box>
      <Routes>
          <Route path="/product" element={<ProductPage />} />
      </Routes>
      </>
  );
}

export default App;
