import { Drawer, ListItemButton, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectOutlined from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';

import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns"

const drawerWidth = 240

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const classes = {
        root: {
            display: "flex",
        },
        mainPage: {
            background: "#f9f9f9",
            width: "100%",
        },
        drawer: {
            width: drawerWidth,
            ".MuiDrawer-paper": {
                width: drawerWidth,
            },
        },
        title: {
            paddingTop: "15px",
            paddingBottom: "5px",
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: {
            marginBottom: "80px",
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: "10px"
        }
    }

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]
    return ( 
        <div style={classes.root}>
            <AppBar sx={classes.appbar} color="secondary" elevation={0}>
                <Toolbar>
                    <Typography sx={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar sx={classes.avatar} src="/super-mario-avatar.jpg"/>
                </Toolbar>
            </AppBar>

            <Drawer 
                sx={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <div className="">
                    <Typography variant="h5" sx={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem 
                            key={item.text} 
                            onClick={() => navigate(item.path)}
                            sx={{background: location.pathname === item.path ? "#f4f4f4" : null}}
                        >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div style={classes.mainPage}>
                <div style={classes.toolbar}></div>
                { children }
            </div>
            
        </div>
     );
}
 
export default Layout;