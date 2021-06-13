import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

function Todo(props) {
    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline"/>

                {/* Todo : {props.text} */}
            </ListItem>
        </List>
    )
}

export default Todo;


//rfce--react functional component with an export
