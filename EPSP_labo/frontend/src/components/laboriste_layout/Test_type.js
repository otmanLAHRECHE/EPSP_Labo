import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';


import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';
import Alt from '../layouts/alert';


const columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'exam_test', headerName: 'Teste', width: 180 },
    { field: 'exam_type', headerName: "Type d'examen", width: 180 },
    { field: 'exam_color', headerName: 'Couleur', width: 130 },
  ];

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  export default function Test_types(){

    const [infFirstName, setInfFirstName] = React.useState("");
    const [infLastName, setInfLastName] = React.useState("");

    const [infFirstNameError, setInfFirstNameError] = React.useState([false, ""]);
    const [infLastNameError, setInfLastNameError] = React.useState([false, ""]);




  }
