import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function LimitTags() {
  const classes = useStyles();

  const top100Films= [{
    name: 'test',
    description: 'test description'
  }]

  const handleChange= e => {
    console.log(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Autocomplete
        onChange= {handleChange}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="limitTags" placeholder="Favorites" />
        )}
      />
    </div>
  );
}