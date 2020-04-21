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

export const SearchForm = () => {
  const classes = useStyles();

  const top100Films = [
    {name: 'Tags', id: 'header'},
    { name: 'The Shawshank Redemption', year: 1994 },
    { name: 'The Godfather', year: 1972 },
    { name: 'The Godfather: Part II', year: 1974 },
    { name: 'The Dark Knight', year: 2008 },
    { name: '12 Angry Men', year: 1957 },
    { name: "Schindler's List", year: 1993 },
    { name: 'Pulp Fiction', year: 1994 }
  ]

  const handleChange = e => {
    console.log(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Autocomplete
        onChange={ e => {handleChange(e)}}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option.name}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Search" placeholder="Search" />
        )}
      />
    </div>
  );
}