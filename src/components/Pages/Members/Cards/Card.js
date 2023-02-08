import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Cards(props) {

  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardHeader
        name={props.name}
      />
      <CardMedia
        component="img"
        height="194"
        img src={props.image} alt="product-img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Button color="secondary" variant="contained"> Add Service</Button>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}