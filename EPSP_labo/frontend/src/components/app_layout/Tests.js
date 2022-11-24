import * as React from 'react';
import { useTheme, styled  } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar, GridActionsCellItem,GridToolbarContainer,GridToolbarFilterButton,} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import Chip from '@mui/material/Chip';

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import Checkbox from '@mui/material/Checkbox';




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

import InputLabel from '@mui/material/InputLabel';
import { getAllInfirmierForSelect } from '../../actions/inf_prelevement_data';
import { getAllTestesTypesForSelect } from '../../actions/exemen_test_data';


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

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
  

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));



  export default function Tests(){

    const [testCode, setTestCode] = React.useState("");
    const [name, setName] = React.useState(null);
    const [prename, setPrename] = React.useState(null);
    const [dateNaissance, setDateNaissance] = React.useState("");
    const [genre, setGenre] = React.useState(null);
    const [testType, setTestType] = React.useState(null);
    const [infPrelevement, setInfPrelevement] = React.useState(null);
    const [testes, setTestes] = React.useState(null);
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
    const [infPrelevementError, setInfPrelevementError] = React.useState([false, ""]);
    const [docNameError, setDocNameError] = React.useState([false, ""]);
    const [dateError, setDateError] = React.useState([false, ""]);
    
    const [testesError, setTestesError] = React.useState([false, ""]);


    const [dateFilterError, setDateFilterError] = React.useState("");

    const [loadError, setLoadError ] = React.useState(false);
    const [response, setResponse] = React.useState("");
    const [responseSuccesSignal, setResponseSuccesSignal] = React.useState(false);
    const [responseErrorSignal, setResponseErrorSignal] = React.useState(false);
    const [sortieQntError, setSortieQntError] = React.useState(false);

    const [allTestTypes, setAllTestTypes] = React.useState([]);
    const [allInfPrelevement, setAllInfPrelevement] = React.useState([]);
    const [allTestes, setAllTestes] = React.useState([]);

    const [currentStockItem, setCurrentStockItem] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [dataSortie, setDataSortie] = React.useState([]);
    const [infData, setInfData] = React.useState([]);
    const [testTypeData, setTestTypeData] = React.useState([]);
    const [testesData, setTestesData] = React.useState([]);
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

        }

        const handleChangeDateN = (newValue) =>{
          setDateNaissance(newValue);

        }

        const handleChangeDatePR = (newValue) =>{
          setDate(newValue);
        }

        const addExamenOpen = async () =>{

          setTestCode("");
          setName("");
          setPrename("");
          setGenre(null);
          setDateNaissance("");
          setDate("");
          setDocName("");

          setTestCodeError([false, ""]);
          setNameError([false, ""]);
          setPrenameError([false, ""]);
          setGenreError([false, ""]);
          setDateNaissanceError([false, ""]);
          setDateError([false, ""]);
          setDocNameError([false, ""]);
          setTestesError([false, ""])

          const token = localStorage.getItem("auth_token");

          setInfData(await getAllInfirmierForSelect(token));

          setTestTypeData(await getAllTestesTypesForSelect(token));

        }

        const editExamenOpen = () =>{
          
        }

        const deleteExamenOpen = () =>{
          
        }

        const deleteExamenClose = () =>{


        }

        const deleteConfirmation = () =>{


        }

        const addExamenClose = () =>{
          setOpen(false);

        }

        const addExamenSave = () =>{

          

        }

        const change_type = (event) => {
          if (event.target.value == ""){
            setGenre("")
          }else if (event.target.value == 1){
            setGenre("Homme")
          }else if (event.target.value == 2){
            setGenre("Famme")
          }
      };


      React.useEffect(() =>{
        try{
          if (infData == "no data"){
            setResponseErrorSignal(true);
          } else if(infData != "") {
            setAllInfPrelevement(infData);
          }
        }catch(e){
          console.log(e);
        }
      }, [infData]);

      React.useEffect(() =>{
        try{
          if (testTypeData == "no data"){
            setResponseErrorSignal(true);
          } else if(testTypeData != "") {
            setAllTestTypes(testTypeData);
            setOpen(true);
          }
        }catch(e){
          console.log(e);
        }
      }, [testTypeData]);

        

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


            <Dialog open={open} onClose={addExamenClose}  maxWidth="lg" fullWidth={true}>
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
                                                        label="Date de naissanse"
                                                        inputFormat="DD/MM/YYYY"
                                                        value={dateNaissance}
                                                        onChange={handleChangeDateN}
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
                                                        onChange={handleChangeDatePR}
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
                                                    value={infPrelevement}
                                                    onChange={(event, newVlue) =>{
                                                        setInfPrelevement(newVlue);
                                                        
                                                    }}
                                                    options={allInfPrelevement}
                                                    renderInput={(params) => <TextField {...params} error={infPrelevementError[0]}
                                                    helperText={infPrelevementError[1]} fullWidth variant="standard" label="Infirmier de prélèvement" 
                                                    required/>}
                                                />  
                                        

                                        </Grid>
                                        <Grid item xs={4}>
                                        <Autocomplete
                                                    disablePortal
                                                    value={testType}
                                                    onChange={async (event, newVlue) =>{
                                                        setTestType(newVlue);

                                                        if (newVlue != null){
                                                          const token = localStorage.getItem("auth_token");
                                                          setTestesData(await )
                                                        }
                                                        
                                                    }}
                                                    options={allTestTypes}
                                                    renderInput={(params) => <TextField {...params} error={testTypeError[0]}
                                                    helperText={testTypeError[1]} fullWidth variant="standard" label="Type de examen" 
                                                    required/>}
                                                />  
                                        
                                        </Grid>

                                        <Grid item xs={4}>
                                        <TextField
                                                  error={docNameError[0]}
                                                  helperText={docNameError[1]}
                                                  margin="dense"
                                                  id="No_d_enregistrement"
                                                  label="Medecin d'analyse"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={(event) => {setDocName(event.target.value)}}
                                          />          
                                        
                                        </Grid>

                                        <Grid item xs={12}>
                                          <Autocomplete
                                                multiple
                                                id="checkboxes-tags-demo"
                                                options={allTestes}
                                                disableCloseOnSelect
                                                getOptionLabel={(option) => option.title}
                                                onChange={(event, newVlue) =>{
                                                  setTestes(newVlue);
                                                  
                                              }}
                                                renderOption={(props, option, { selected }) => (
                                                  <li {...props}>
                                                    <Checkbox
                                                      icon={icon}
                                                      checkedIcon={checkedIcon}
                                                      style={{ marginRight: 8 }}
                                                      checked={selected}
                                                    />
                                                    {option.title}
                                                  </li>
                                                )}
                                                style={{ width: 500 }}
                                                renderInput={(params) => (
                                                  <TextField {...params} label="Les testes d'examen" placeholder="Teste" error={testesError[0]}
                                                  helperText={testesError[1]}/>
                                                )}
                                              />       
                                        
                                        </Grid>

                                        

                        
                      </Grid>
                    </DialogContent>
                              <DialogActions>
                                <Button onClick={addExamenClose}>Anuller</Button>
                                <Button onClick={addExamenSave}>Sauvgarder</Button>
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


  