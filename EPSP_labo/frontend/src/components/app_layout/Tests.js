import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar, GridActionsCellItem,GridToolbarContainer,GridToolbarFilterButton,} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Autocomplete from '@mui/material/Autocomplete';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Alt from '../layouts/alert';

import { internal_processStyles } from '@mui/styled-engine';
import ExamenItemsList from './Items-test-list';


import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const columns = [
    { field: 'id', headerName: 'Id', width: 60, hide: true },
    { field: 'id2', headerName: "No D'ENREGISTREMENT", width: 180},
    { field: 'id3', headerName: "NOM", width: 140},
    { field: 'id4', headerName: "PRENOM", width: 140},
    { field: 'id5', headerName: "AGE", width: 100},
    { field: 'id6', headerName: "GENRE", width: 80},
    { field: 'date', headerName: "DATE D'PRELEVEMENT", width: 150 },
    { field: 'date2', headerName: "INF DE PRELEVEMENT", width: 150 },
    { field: 'date3', headerName: "TYPE D'EXAMEN", width: 140 },
    { field: 'sort', headerName: "LES TESTES D'EXAMEN", width: 200 , renderCell: (params) => (
      <ExamenItemsList rows={params.row.sortie_items_set}/>
    ),
   },
  ];
  
  var sortieItemsTableData = [];

  export default function Tests(){

    const [testCode, setTestCode] = React.useState("");
    const [name, setName] = React.useState(null);
    const [prename, setPrename] = React.useState(null);
    const [dateNaissance, setDateNaissance] = React.useState("");
    const [genre, setGenre] = React.useState(null);
    const [testType, setTestType] = React.useState(null);
    const [docName, setDocName] = React.useState(null);
    const [date, setDate] = React.useState("");

    const [dateFilter, setDateFilter] = React.useState(dayjs());

    const [examenName, setExamenName] = React.useState(null);

    const [examenNameError, setExamenNameError] = React.useState([false, ""]);

    const [callBack, setCallBack] = React.useState("");

    const [dateFilterNotErr, setDateFilterNotErr] = React.useState(false);
    

    const [testCodeError, setTestCodeError] = React.useState([false, ""]);
    const [nameError, setNameError] = React.useState([false, ""]);
    const [prenameError, setPrenameError] = React.useState([false, ""]);
    const [dateNaissanceError, setDateNaissanceError] = React.useState([false, ""]);
    const [genreError, setGenreError] = React.useState([false, ""]);
    const [testTypeError, setTestTypeError] = React.useState([false, ""]);
    const [docNameError, setDocNameError] = React.useState([false, ""]);
    const [dateError, setDateError] = React.useState([false, ""]);

    const [dateFilterError, setDateFilterError] = React.useState("");

    const [loadError, setLoadError ] = React.useState(false);
    const [response, setResponse] = React.useState("");
    const [responseSuccesSignal, setResponseSuccesSignal] = React.useState(false);
    const [responseErrorSignal, setResponseErrorSignal] = React.useState(false);
    const [sortieQntError, setSortieQntError] = React.useState(false);

    const [currentStockItem, setCurrentStockItem] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [dataSortie, setDataSortie] = React.useState([]);
    const [namesData, setNamesData] = React.useState([]);
    const [sourceData, setSourceData] = React.useState([]);
    const [arrivageData, setArrivageData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [selectionError, setSelectionError] = React.useState(false);
    const [selectionModelItems, setSelectionModelItems] = React.useState([]);
    const [rowData, setRowData] = React.useState("");
    const [loadingSortieItem, setLoadingSortieItem] = React.useState(false);

    const [dataError, setDataError] = React.useState(false);


    const theme = useTheme

    

      function Copyright(props) {
          return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
              {'Copyright © '}
              <Link color="inherit" href="https://github.com/otmanLAHRECHE">
                Labo_SysApp EPSP_labo V1.0 
              </Link>{' '}
              -- created by otman LAHRECHE
              {'.'}
            </Typography>
          );
        }


        const handleChangeFilterDate = (newValue) =>{
          setDateFilter(newValue);

          console.log("filter date...", newValue);

        }

        const addExamenOpen = () =>{

        }

        const editExamenOpen = () =>{
          
        }

        const deleteExamenOpen = () =>{
          
        }

        const deleteExamenClose = () =>{


        }

        const deleteConfirmation = () =>{


        }

        

        return(

          <React.Fragment>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>

              <Grid item xs={6}>

              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DesktopDatePicker
                                                        views={['year', 'month']}
                                                        label="Selectioner le mois"
                                                        value={dateFilter}
                                                        onChange={handleChangeFilterDate}
                                                        renderInput={(params) => <TextField {...params} error={dateFilterError[0]}
                                                        helperText={dateFilterError[1]} 
                                                        required/>}
                                                />

              </LocalizationProvider>

              </Paper>
                
              </Grid>

              <Grid item xs={6}>

              <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                    }}
                >
                <ButtonGroup variant="outlined" aria-label="outlined primary button group" orientation="vertical">
                  <Button startIcon={<AddCircleOutlineIcon />} onClick={addExamenOpen}>Ajouter un examen</Button>
                  <Button startIcon={<EditAttributesIcon />} onClick={editExamenOpen}>Modifier un examen</Button>
                  <Button startIcon={<DeleteForeverIcon />} onClick={deleteExamenOpen}>Supprimer un examen</Button>
                </ButtonGroup>
                </Box>
                
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 700, width: '100%' }}>
                          <DataGrid
                            components={{
                              Toolbar: GridToolbar,
                            }}
                              rows={data}
                              columns={columns}
                              pageSize={15}
                              checkboxSelection = {false}
                              loading={loading}
                              getRowHeight={() => 'auto'}
                              disableMultipleSelection={true}
                              onSelectionModelChange={(newSelectionModel) => {
                                setSelectionModel(newSelectionModel);
                              }}
                              selectionModel={selectionModel}
                              
                              
                          />
                    </div>   
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />


            <Dialog open={open} onClose={addBonSortieClose}  maxWidth="lg" fullWidth={true}>
                  <DialogTitle>Ajouter un exemen</DialogTitle>
                    <DialogContent>
                      <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                          <TextField
                                                  error={testCodeError[0]}
                                                  helperText={testCodeError[1]}
                                                  margin="dense"
                                                  id="No_d_enregistrement"
                                                  label="No d'enregistrement"
                                                  fullWidth
                                                  variant="standard"
                                                  type="number"
                                                  onChange={(event) => {setTestCode(event.target.value)}}
                                          />

                                        </Grid>
                                        <Grid item xs={4}>
                                        <TextField
                                                  error={nameError[0]}
                                                  helperText={nameError[1]}
                                                  margin="dense"
                                                  id="Nom_de_malade"
                                                  label="Nom de malade"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={(event) => {setName(event.target.value)}}
                                          />
                                        
                                        </Grid>

                                        <Grid item xs={4}>
                                        <TextField
                                                  error={prenameError[0]}
                                                  helperText={prenameError[1]}
                                                  margin="dense"
                                                  id="No_d_enregistrement"
                                                  label="Prenom de malade"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={(event) => {setPrename(event.target.value)}}
                                          />
                                                 
                                        
                                        </Grid>

                        
                      </Grid>

                      <br></br> 

                      <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DesktopDatePicker
                                                        label="Date"
                                                        inputFormat="DD/MM/YYYY"
                                                        value={dateNaissance}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField {...params} error={dateNaissanceError[0]}
                                                        helperText={dateNaissanceError[1]} 
                                                        required/>}
                                                />

                                            </LocalizationProvider>

                                        </Grid>
                                        <Grid item xs={4}>
                                        <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
                                          <InputLabel required htmlFor="grouped-select"
                                               error={genreError[0]} helperText={genreError[1]}>Genre</InputLabel>
                                            <Select defaultValue="" id="grouped-select" label="Genre"
                                            onChange={change_type}>
                                              <MenuItem value="">
                                                <em>None</em>
                                              </MenuItem>
                                              <MenuItem value={1}>homme</MenuItem>
                                              <MenuItem value={2}>famme</MenuItem>
                                            

                                            </Select>
                                </FormControl>   
                                        
                                        </Grid>

                                        <Grid item xs={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DesktopDatePicker
                                                        label="Date de prélèvement"
                                                        inputFormat="DD/MM/YYYY"
                                                        value={date}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField {...params} error={dateError[0]}
                                                        helperText={dateError[1]} 
                                                        required/>}
                                                />

                                            </LocalizationProvider>
                                                 
                                        
                                        </Grid>

                        
                      </Grid>

                      <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                        <Autocomplete
                                                    disablePortal
                                                    value={}
                                                    onChange={(event, newVlue) =>{
                                                        setSource(newVlue);
                                                        
                                                    }}
                                                    options={allSources}
                                                    renderInput={(params) => <TextField {...params} error={sourceError[0]}
                                                    helperText={sourceError[1]} fullWidth variant="standard" label="Destination" 
                                                    required/>}
                                                />  
                                        

                                        </Grid>
                                        <Grid item xs={4}>
                                        <Autocomplete
                                                    disablePortal
                                                    value={source}
                                                    onChange={(event, newVlue) =>{
                                                        setSource(newVlue);
                                                        
                                                    }}
                                                    options={allSources}
                                                    renderInput={(params) => <TextField {...params} error={sourceError[0]}
                                                    helperText={sourceError[1]} fullWidth variant="standard" label="Destination" 
                                                    required/>}
                                                />  
                                        
                                        </Grid>

                                        <Grid item xs={4}>
                                         
                                        
                                        </Grid>

                                        

                        
                      </Grid>
                    </DialogContent>
                              <DialogActions>
                                <Button onClick={addBonSortieClose}>Anuller</Button>
                                <Button onClick={addBonSortieSave}>Sauvgarder</Button>
                              </DialogActions>   

                    
            </Dialog>

            

            <Dialog open={openDelete}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={deleteExamenClose}
                                    aria-describedby="alert-dialog-slide-description"
                                  >
                                    <DialogTitle>{"Confirmer la suppression d'un examen"}</DialogTitle>
                                    <DialogContent>
                                      <DialogContentText id="alert-dialog-slide-description">
                                      Êtes-vous sûr de la décision de supprimer l'examen ?
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={deleteExamenClose}>Anuller</Button>
                                      <Button onClick={deleteConfirmation}>Supprimer</Button>
                                    </DialogActions>
                      </Dialog>
            
          </Container>


            {loadError ? <Alt type='error' message='Des erruers sur les données' onClose={()=> setLoadError(false)}/> : null}
            {responseSuccesSignal ? <Alt type='success' message='Opération réussie' onClose={()=> setResponseSuccesSignal(false)}/> : null}
            {responseErrorSignal ? <Alt type='error' message='Opération a échoué' onClose={()=> setResponseErrorSignal(false)}/> : null}
            {selectionError ? <Alt type='error' message='Selectioner un item' onClose={()=> setSelectionError(false)} /> : null}
            {sortieQntError ? <Alt type='error' message='la quantité remplie n est pas desponible' onClose={()=> setSortieQntError(false)} /> : null}
            {dataError ? <Alt type='error' message='La liste des items de bon de sorte est vide!!' onClose={()=> setDataError(false)} /> : null}
            {dateFilterNotErr ? <Alt type='error' message='La liste des items de bon de sorte est vide!!' onClose={()=> setDateFilterNotErr(false)} /> : null}
          
        </React.Fragment>



        );
  }


  