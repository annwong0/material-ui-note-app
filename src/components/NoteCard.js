import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { ClassNames } from '@emotion/react';
import { blue, green, pink, yellow } from '@mui/material/colors';

const NoteCard = ({ note, handleDelete }) => {
    const classes = {
        avatar: {
            border: (note) => {
                if (note.category == 'work') {
                    return '1px solid red'
                }
            }
        }
    }

    return ( 
        <div className="">
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{backgroundColor: note.category === "work" ? yellow[700] : note.category === "money" ? green[500] : note.category === "todo" ? pink[500] : note.category === "reminder" ? blue[500] : null }}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title} 
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default NoteCard;