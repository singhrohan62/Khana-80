import React, {Component} from 'react';
import '../css/About.css';
import '../css/Menu.css';
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


class Contact_Us extends Component {
	render () {
		const {classes} = this.props;
		return (
				<div>
                  
                    <div className="paper-component">
                        <Paper className = {classes.root} elevation = {8}>
 							<h5>C O N T A C T - U S </h5>                             
                            <h6>
                            	ASSI GHAT, NEAR RAJAT 80'S, VARANASI, UTTAR PRADESH
                            </h6>

                            <h6>
                            	CALL  US  ON : +6 - - - 5 4 - 5 5
                            </h6>

                            <h6>
                            	EMAIL ID : dsfnslng@hotmail.com
                            </h6>
                            
                        </Paper>
                    </div>
            </div>
			);
	}
}

Contact_Us.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact_Us);