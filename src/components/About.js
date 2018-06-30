import React from 'react';
import '../css/About.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root : ({
         ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 10,
        backgroundColor : "transparent",
         marginTop: theme.spacing.unit * 8,
         marginLeft: theme.spacing.unit * 2,
    }),
});

class About extends React.Component {

    render () {
        const {classes} = this.props;
        return(
            <div>
                  
                    <div className="paper-component">
                        <Paper className = {classes.root} elevation = {8}>
                              <p class="typewriter">N I R V A N A</p>
                            <h6>
                                Café Niravana, Varanasi’s most charming café is situated at the edge of river Ganga, in Assi Ghat. 
                                The idea was to create a peaceful and lively space where people could have a wonderful meal, 
                                relax and feel rejuvenated, meet over aromatic coffees and fresh juices accompanied with delicious cakes,
                                exchange ideas over wholesome global cuisine and ‘just be’ in a friendly and aesthetic environment with 
                                friends and family enjoying nature’s bounty and witnessing the beauty of the city.
                            </h6>
                            
                        </Paper>
                    </div>
            </div>
        );
    }
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);