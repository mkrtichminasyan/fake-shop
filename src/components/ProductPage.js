
// import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions, Collapse, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../middleware/getProducts';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { ImageListItem } from '@mui/material';
// import { Rowing } from '@material-ui/icons';




const ProductPage = () => {
    const dispatch = useDispatch()
    const { product } = useSelector(state => state)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        dispatch(getProducts()).then(() => {setLoading(false)})
    }, [])

    if(loading) {
        return <Button>hello</Button>
    }
    return (
        <Grid container spacing={2} >
            {product.map((e) => {
                
                return (
                    <Grid sx={{height:'400px'}} item xs={4}  key={e.id}>
                        <Card><ImageListItem key={e.image}   orientation="horizontal">
                            <img
                                style={{height: 200}}
                                src={e.image}
                                srcSet={e.image}
                                alt={e.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <Typography  style={{height: "50", paddingTop: "10"}}>
                            {e.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{height: "120", paddingTop: "10", marginBottom: "20"}} >
                            {e.description}
                        </Typography>
                    </Card>

                    </Grid>
                )
            })}

        </Grid>
    );
};

export default ProductPage;