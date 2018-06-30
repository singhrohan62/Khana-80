import React,{Component} from 'react';
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

class Menu extends Component {
	    render () {
        const {classes} = this.props;
        return(
            
                  
                    <div className="paper-component">
                        <Paper className = {classes.root} elevation = {8}>
                              <p class="typewriter"> * * * * * * * M E N U * * * * * * * </p>
                            <h6>
                                Café Nirvana has a varied selection of foods and drinks. It is a place where
                                 people who cook with love and a spirit of adventure prepare different cuisines. 
                                 Our ingredients are chosen with care, we try our best to buy local, and stay away 
                                 from using artificial colourants and preservatives.
								Summer days come and enjoy refreshing and energizing fresh juices with light food. 
								Winter evenings are a treat in the Café balcony, with a cozy fire to compliment the seasonal food.
			                </h6>
			               	<h5>COFFEES</h5>
                            <h6>Enjoy our very special unique blend of coffee beans and amazing aromatic teas. 
                            Add an extra shot of coffee for just Rs. 95</h6>
                       	</Paper>
                    </div>
          
        );
    }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);