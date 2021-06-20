import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';


  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 150,
    },
    headers: {
        fontSize: '25px',
        textDecoration: 'underline'
    },
  }));

export default function Footer() {

    const [data, setData] = useState([])
    const [onMobile, setMobile] = useState('')
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('building-location.json', {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const locationsArray = await response.data.locations
            const dataArray = []
            locationsArray.map((location) => {
                location.consumers.map((consumer) => {
                    dataArray.push(consumer)
                })
            })
            setData(dataArray)
        }
        getData()
    }, [])

    
    const handleClick = (e) => {
        setMobile(e.target.value)
    }


    const usersPerPage = 15
    const pagesVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(data.length / usersPerPage)
    
    const filteredTrue = data.filter(person => person.isPhoneMobile === true)
    const filteredFalse = data.filter(person => person.isPhoneMobile === false)

    const filteredTrueCount = Math.ceil(filteredTrue.length / usersPerPage)
    const filteredFalseCount = Math.ceil(filteredFalse.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const showData = (people, isMobile) => {
        const peopleArray = []
        people.map((person) => {
            if (isMobile === undefined) {
                peopleArray.push(person)
            }
            else if(person.isPhoneMobile === isMobile) {
                peopleArray.push(person)
            }
        })
        return( 
                peopleArray.slice(pagesVisited, pagesVisited + usersPerPage).map((person) =>{
                    return (
                        <Grid container md={12} style={{paddingBottom: '4px'}}>
                            <Grid item md={3}>
                                <Typography>{person.name}</Typography>
                            </Grid>
                            <Grid item md={3}>
                                <Typography>{person.email}</Typography>
                            </Grid>
                            <Grid item md={3}>
                                <Typography>{new Date(person.occupationDate).toString().slice(0, 24)}</Typography>
                            </Grid>
                            <Grid item md={3}>
                                <Typography>{person.phoneNumber}</Typography>
                            </Grid>
                        </Grid>
                    )
                })
            )
    }


    return (
        <Grid style={{paddingLeft: '2px'}} > 
            <Grid md={12} style={{display:'flex', justifyContent: 'center'}}>
                <Typography style={{fontSize: '50px', textDecoration: 'underline'}}>Customer Data Page</Typography>
            </Grid>
            {data === undefined ? <Typography>Waiting</Typography> :
            <Grid container md={12}> 
                <Grid container md={12}>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Filter By Mobile</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={onMobile}
                    onChange={handleClick}
                    >
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                    <MenuItem value={''}>Show All</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid container md={12} style={{marginBottom: '25px'}}>
                    <Grid item md={3} >
                        <Typography className={classes.headers} >Customer Name</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.headers}>Email</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.headers}>Occupation Date</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.headers}>Phone Number</Typography>
                    </Grid>
                </Grid>
                {data && onMobile === '' && (
                    <>
                   {showData(data, undefined)}
                   <Grid style={{paddingTop: '40px'}}>
                   <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                   />
                   </Grid>
                   </>
                )}
                {data && onMobile === true &&  
                <>
                   {showData(data, true)}
                   <Grid style={{paddingTop: '40px'}}>
                   <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={filteredTrueCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                   />
                   </Grid>
                </>}
                {data && onMobile === false &&  
                <>
                   {showData(data, false)}
                   <Grid style={{paddingTop: '40px'}}>
                   <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={filteredFalseCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                   />
                   </Grid>
                </>}
            </Grid>}
        </Grid>
    )
}