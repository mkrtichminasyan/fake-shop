import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useSearchParams, createSearchParams, useParams } from 'react-router-dom'
import { getCategories } from '../middleware/getCategories';
import { Button } from '@mui/material';
import { getProducts } from '../middleware/getProducts';
import { Link } from 'react-router-dom';


export default function DenseAppBar() {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('category')
  // console.log('categoryName', categoryName)
  const dispatch = useDispatch()
  const { category } = useSelector(state => state)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  useEffect(() => {
    dispatch(getProducts(categoryName))
  }, [categoryName, dispatch])

  const changeRaute = (name) => {

    navigate({
      pathname: "product",
      search: createSearchParams({
        category: name,
      }).toString()
    });
  }

  console.log('useParams', useNavigate())

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          </Typography>
          {category.map((e, i) =>
            <Button color="inherit" variant="outlined"
              key={i}
              onClick={() => changeRaute(e)}
            >

              <Link to='product'>{e}</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
