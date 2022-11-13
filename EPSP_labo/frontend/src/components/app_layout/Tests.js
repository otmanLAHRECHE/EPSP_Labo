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

import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import Alt from '../layouts/alert';

const columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'medic_code', headerName: 'Code', width: 100 },
    { field: 'medic_name', headerName: 'Médicament', width: 400 },
    {
      field: 'Dose de médicament',
      headerName: 'Dosage',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      valueGetter: (params) =>
        `${params.row.medic_dose || ''} ${params.row.dose_unit || ''}`,
    },
    
    { field: 'medic_type', headerName: 'Type et Classe', width: 300 },
    
    { field: 'medic_place', headerName: 'Place de médicament', width: 150 },
  ];

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  export 