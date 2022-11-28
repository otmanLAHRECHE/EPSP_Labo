import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { getSelectedExemenTest } from '../../actions/exemen_test_data';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


var list_d = [];

export default function ExamenItemsList(props) {

  const [result, setResult] = React.useState("");
  const [listDesplay, setListDesplay] = React.useState([]);
  const list_work = props.testes.split("/");

  React.useEffect(() => {
    const get_data = async (id) =>{
      const token = localStorage.getItem("auth_token");
        setResult(await getSelectedExemenTest(token, id));
    }
      for(let i=0; i<list_work.length; i++){ 
        get_data(Number(list_work[i]));
        if(i== list_work.length -1 ){
          list_d = [];
        }
      }
            
  }, []);

  React.useEffect(() => {

    if(result == ""){

    }else{
      list_d.push(result);
      setListDesplay(list_d);
    }
    
    
  }, [result]);

  

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
      {listDesplay.map((test) => {
        return (
          <ListItem key={test.id}>
            <Chip
              label={test.exam_test}
              color={test.exam_type === 'Serologie' ? "error" : (test.exam_type === 'Bacteriologie' ? "warning" : "secondary")}
            />
          </ListItem>
        );
      })}
    </Paper>
    </Container>
   

  );
}