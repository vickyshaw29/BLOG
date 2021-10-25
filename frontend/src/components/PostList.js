import {
  List,
  useListContext,
  EditButton,
  DeleteButton,
} from 'react-admin';

import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';
import inflection from 'inflection';
import styles from '../styles/styles';

const CategoryGrid = (props) => {
  const classes = styles();
  const { data, ids } = useListContext();

  return ids ? (
    <Grid container spacing={2} className={classes.root}>
      {ids.map((id) => (
        <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item >
          <Card elevation={5} className={classes.card}>
            <CardMedia
              image={`https://source.unsplash.com/random`}
              className={classes.media}
            />
            <CardContent className={classes.title}>
              <Typography
                component="h2"
                align="center"
                className={classes.titleTxt}
              >
                {inflection.humanize(
                  data[id].title.length > 30
                    ? `${data[id].title.slice(0, 28)}`
                    : data[id].title
                )}
              </Typography>
              <Typography variant="body2" component="h2" align="center">
                {inflection.humanize(
                  data[id].body.length > 30
                    ? `${data[id].body.slice(0, 30)}..`
                    : data[id].body
                )}
              </Typography>
            </CardContent>
            <CardActions classes={{ spacing: classes.actionSpacer }}>
              <EditButton
                basePath="/posts"
                record={data[id]}
                variant="outlined"
              />
              <DeleteButton
                basePath="/posts"
                record={data[id]}
                variant="outlined"
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

const ShowPost = (props) => {
  return (
    <List
      {...props}
      sort={{ field: 'name', order: 'ASC' }}
      perPage={20}
      component="div"
      // actions={false}
    >
      <CategoryGrid />
    </List>
  );
};

export default ShowPost;
