import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';



export default function ExamenItemsList(props) {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {props.tests.map((test) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              label={test}
              color={props.type === 'Serologie' ? "error" : (props.type === 'Bacteriologie' ? "warning" : "secondary")}
            />
          </ListItem>
        );
      })}
    </Paper>
    </Container>
   

  );
}