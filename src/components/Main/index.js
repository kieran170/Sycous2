import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Typography, Button } from '@material-ui/core'

export default function Footer() {

    const [data, setData] = useState()

    useEffect(() => {
        getData()
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
                    console.log(dataArray)
                })
            })
        }
    })


    
    const handleClick = () => {
        console.log(data)
    }
    
    return (
        <Grid>
            <Typography>Hello</Typography>
            <Button variant="outlined" onClick={handleClick}>click here</Button>
        </Grid>
    )
}