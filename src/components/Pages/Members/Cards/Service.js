import React from "react";
import { Card, CardActions, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import contents from "./content";
import Cards from "./Card";
import { Sidebar } from "../../../Layout/Sidebar";

export default function Service() {
  return (
    <>
   <Sidebar />
   <Box sx={{ flexGrow: 1 }}>
    <Grid container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }} >
     
           <Card>
    {contents.map((contents) => ( 
    <Grid container spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}>
          <Cards
            key={contents.id}
            image={contents.image}
            name={contents.name}
            description={contents.description}
          />
          </Grid>
        ))}
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    </Grid>
    </Box>
    </>
  );
}
