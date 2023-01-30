import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Create = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [details, setDetails] = useState('')
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState("todos")

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
    
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
        }
    }

    return ( 
        <div className="">
            <Container>
                <Typography 
                    variant='h6'
                    component='h2'
                    color='textSecondary'
                    gutterBottom
                >
                    Create a New Note
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField 
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{
                            marginTop: 2,
                            marginBottom: 2,
                            display: 'block'
                        }}
                        label="Note Title"
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        required
                        error={titleError}
                    />

                    <TextField 
                        onChange={(e) => setDetails(e.target.value)}
                        sx={{
                            marginTop: 0,
                            marginBottom: 5,
                            display: 'block'
                        }}
                        label="Details"
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        multiline
                        rows={4}
                        required
                        error={detailsError}
                    />

                    <FormControl
                        sx={{
                            display: 'block'
                        }}
                    >
                        <FormLabel>Category</FormLabel>
                        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                            <FormControlLabel control={<Radio />} label='Money' value='money' />
                            <FormControlLabel control={<Radio />} label='Todos' value='todos' />
                            <FormControlLabel control={<Radio />} label='Reminder' value='reminder' />
                            <FormControlLabel control={<Radio />} label='Work' value='work' />
                        </RadioGroup>
                    </FormControl>
                    

                    <Button 
                        type="submit" 
                        color="secondary" 
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon/>}
                        >
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
     );
}
 
export default Create;