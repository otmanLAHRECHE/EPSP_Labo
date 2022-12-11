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


<<<<<<< HEAD
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SummarizeIcon from '@mui/icons-material/Summarize';

import InputLabel from '@mui/material/InputLabel';
import { getAllInfirmierForSelect } from '../../actions/inf_prelevement_data';
import { getAllTestesTypesForSelect, getLastExemenTest, getTestesForSelectedType } from '../../actions/exemen_test_data';
import { addNewExemen, getAllExamenOfMonth, deleteExemen, addNewTest, getSelectedExemen, updateExemen, deleteTestOfExamen } from '../../actions/examen_data';
import ReadyStatus from './ready_status';


=======
>>>>>>> parent of 93c2f0da (updates)
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

<<<<<<< HEAD
        }

        const handleChangeDateN = (newValue) =>{
          setDateNaissance(newValue);

        }

        const handleChangeDatePR = (newValue) =>{
          setDate(newValue);
        }

        const addResultOpen = async() =>{
          if(selectionModel.length == 0){
            setSelectionError(true);
          }else{    
          setTestCode("");
          setName("");
          setPrename("");
          setGenre(null);
          setDateNaissance("");
          setDate("");
          setDocName("");
          setInfPrelevement(null);
          setTestType(null);
          setTestes(null);

          setTestCodeError([false, ""]);
          setNameError([false, ""]);
          setPrenameError([false, ""]);
          setGenreError([false, ""]);
          setDateNaissanceError([false, ""]);
          setDateError([false, ""]);
          setDocNameError([false, ""]);
          setInfPrelevementError([false, ""]);
          setTestTypeError([false, ""]);
          setTestesError([false, ""]);

            const token = localStorage.getItem("auth_token");

            setInfData(await getAllInfirmierForSelect(token));

            setTest2TypeData(await getAllTestesTypesForSelect(token));
    
            setRowData(await getSelectedExemen(token, selectionModel[0])); 
          }
          
        }

        const addResultatClose = () =>{
          setOpenUpdate(false);
        }

        const addResultatSave = async() =>{

          var test = true;

          if(testCode == "" || testCode == 0){
            test = false;
            setTestCodeError([true, "erreur sur ce champ"]);
          }

          if(name =="" || name == null){
            test = false;
            setNameError([true, "champ est obligatoire"]);
          }

          if(prename =="" || prename == null){
            test = false;
            setPrenameError([true, "champ est obligatoire"]);
          }

          if(genre == "" || genre ==null){
            test = false;
            setGenreError([true, "champ est obligatoire"]);
          }

          if(date == null || date == ""){
            test = false;
            setDateError([true, "champ est obligatoire"]);
          }else if(date.isValid() == false){
            test = false;
            setDateError([true, "date n est pas valide"]);
          }

          if(dateNaissance == null || dateNaissance == ""){
            test = false;
            setDateNaissanceError([true, "champ est obligatoire"]);
          }else if(dateNaissance.isValid() == false){
            test = false;
            setDateNaissanceError([true, "date n est pas valide"]);
          }

          if(infPrelevement ==null){
            test = null;
            setInfPrelevementError([true, "champ est obligatoire"]);
          }

          if(testType ==null){
            test = null;
            setTestTypeError([true, "champ est obligatoire"]);
          }

          if(testes ==null){
            test = null;
            setTestesError([true, "champ est obligatoire"]);
          }

          if(docName =="" || docName == null){
            test = false;
            setDocNameError([true, "champ est obligatoire"]);
          }

          if (test){
            var m = date.get('month')+1;
            const d = date.get('date') +"/"+m +"/"+date.get('year');

            var mN = dateNaissance.get('month')+1;
            const d2 = dateNaissance.get('date') +"/"+m +"/"+ dateNaissance.get('year');

=======
          console.log("filter date...", newValue);

        }

        const addExamenOpen = () =>{

        }

        const editExamenOpen = () =>{
>>>>>>> parent of 93c2f0da (updates)
          
        }

        const deleteExamenOpen = () =>{
          
        }

        const deleteExamenClose = () =>{


        }

        const deleteConfirmation = () =>{


        }

<<<<<<< HEAD
        const change_type = (event) => {
          if (event.target.value == ""){
            setGenre("")
          }else if (event.target.value == 1){
            setGenre("Homme")
          }else if (event.target.value == 2){
            setGenre("Famme")
          }
      };
    

      React.useEffect(() => {
        console.log(rowData);
        try{

          const get_data = async(x)=>{
            const token = localStorage.getItem("auth_token");
            setTestesData(await getTestesForSelectedType(token, x));
          }


  
          if (rowData == "no data"){
            setResponseErrorSignal(true);
          } else if(rowData != "") {

          get_data(rowData.exm_type)
    
          setOpenUpdate(true);
    
          setTestCode(rowData.no_enregistrement);
          setName(rowData.patient_first_name);
          setPrename(rowData.patient_last_name);
          setDateNaissance(dayjs(rowData.patient_birth_day, 'YYYY-MM-DD'));
          setGenre(rowData.patient_genre);
          if(rowData.patient_genre == "Homme"){
            setGenreValue(1);
          }else{
            setGenreValue(2);
          }
          setDocName(rowData.doctor_send_from);
          setDate(dayjs(rowData.date_prelevement, 'YYYY-MM-DD'));
          setInfPrelevement({"id":rowData.inf_prelevement.id, "label":rowData.inf_prelevement.first_name +" "+rowData.inf_prelevement.last_name})
          setTestType({"label":rowData.exm_type});
          
          
  
          setTestCodeError([false, ""]);
          setNameError([false, ""]);
          setPrenameError([false, ""]);
          setGenreError([false, ""]);
          setDateNaissanceError([false, ""]);
          setDateError([false, ""]);
          setDocNameError([false, ""]);
          setInfPrelevementError([false, ""]);
          setTestTypeError([false, ""]);
          setTestesError([false, ""]);
  
          }
        }catch(e){
          console.log(e)
        }
  
      }, [rowData]);

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

      React.useEffect(() =>{
        try{
          if (test2TypeData == "no data"){
            setResponseErrorSignal(true);
          } else if(test2TypeData != "") {
            setAllTestTypes(test2TypeData);
          }
        }catch(e){
          console.log(e);
        }
      }, [test2TypeData]);


      React.useEffect(() =>{
        try{
          if (testesData == "no data"){
            setResponseErrorSignal(true);
          } else if(testesData != "") {
            setAllTestes(testesData);
          }
        }catch(e){
          console.log(e);
        }
      }, [testesData]);

      

      React.useEffect(() =>{
        try{
          if (numberEnrgData == "no data"){
            setResponseErrorSignal(true);
          } else if(numberEnrgData != "") {
            setTestCode(numberEnrgData.no_enregistrement + 1);
          } else{
            setTestCode(1);
          }
        }catch(e){
          console.log(e);
        }
      }, [numberEnrgData]);


      React.useEffect(() => {
  
        if (response == "error"){
          setResponseErrorSignal(true);
        } else if(response != "") {
          setResponseSuccesSignal(true);
        }
  
      }, [response]);

      React.useEffect(() => {

        setLoading(true);
        setDateFilterError([false, ""]);

        const fetchData = async () => {
          try {
            const token = localStorage.getItem("auth_token");
            var month = dateFilter.get("month")+1
            var year = dateFilter.get('year')
            setData(await getAllExamenOfMonth(token, month, year));
            setLoading(false);
          } catch (error) {
            console.log("error", error);
          }
        };

        if (dateFilter.isValid() == false || dateFilter ==""){
          setDateFilterError([true, "une erreur sur le champ de date"]);
          setDateFilterNotErr(true);
        }else{
          fetchData();
        }

        setOpen(false);
      }, [response, dateFilter]);


      React.useEffect(() => {

        const upload = async (da) =>{
          const token = localStorage.getItem("auth_token");
            await addNewTest(token, JSON.stringify(da));
        }

        const upload2 = async (da) =>{
          const token = localStorage.getItem("auth_token");           
            setResponse(await addNewTest(token, JSON.stringify(da)));
        }

  
        if (callBack == ""){

        } else{

          console.log("callback..........", callBack.id_examen);
          console.log("length..........", testes.length);

          for(var i=0; i<testes.length; i++){

            if(i != testes.length - 1){
              const d = {
                "exam_id":Number(callBack.id_examen),
                "exam_test_id":testes[i].id
              };

              upload(d);

            }else{
              const d = {
                "exam_id":Number(callBack.id_examen),
                "exam_test_id":testes[i].id
              };
              upload2(d);              
            }                    
          }
          setResponseSuccesSignal(true);
          setCallBack("");
          setOpen(false);
        }
  
      }, [callBack]);


      React.useEffect(() => {

        const delete_history = async() =>{
          const token = localStorage.getItem("auth_token");
            await deleteTestOfExamen(token, rowData.id);
        }

        const upload = async (da) =>{
          const token = localStorage.getItem("auth_token");
            await addNewTest(token, JSON.stringify(da));
        }
        const upload2 = async (da) =>{
          const token = localStorage.getItem("auth_token");           
            setResponse(await addNewTest(token, JSON.stringify(da)));
        }

        if (callBackUpdate == ""){

        } else{

          delete_history();

          for(var i=0; i<testes.length; i++){
            if(i != testes.length - 1){
              const d = {
                "exam_id":Number(rowData.id),
                "exam_test_id":testes[i].id
              };

              upload(d);

            }else{
              const d = {
                "exam_id":Number(rowData.id),
                "exam_test_id":testes[i].id
              };
              upload2(d);              
            }                    
          }
          setResponseSuccesSignal(true);
          setCallBackUpdate("");
          setOpenUpdate(false);
        }
  
      }, [callBackUpdate]);



=======
        
>>>>>>> parent of 93c2f0da (updates)

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
                  <Button startIcon={<SummarizeIcon />} onClick={addResultOpen}>Ajouter un résultat</Button>
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

<<<<<<< HEAD

            <Dialog open={openUpdate} onClose={addResultatClose}  maxWidth="lg" fullWidth={true}>
                  <DialogTitle>Resultat</DialogTitle>
                    <DialogContent>
                      <Grid container spacing={2}>
                                        <Grid item xs={6}>
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
                                        <Grid item xs={6}>
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

                      </Grid>

                      <br></br> 

                      <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                        <TextField
                                        id="outlined-textarea"
                                        label="Multiline Placeholder"
                                        placeholder="Placeholder"
                                        multiline
                                      />

                                        </Grid>
                                        <Grid item xs={6}>
                                        
                                        </Grid>
                        
                      </Grid>

                    </DialogContent>
                              <DialogActions>
                                <Button onClick={addResultatClose}>Anuller</Button>
                                <Button onClick={addResultatSave}>Sauvgarder</Button>
                              </DialogActions>   

                    
            </Dialog>
=======
            
>>>>>>> parent of 93c2f0da (updates)

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


  