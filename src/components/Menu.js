import React,{Component} from 'react';
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
                            <div className="food-item">
                            <h6 className="food-item-name">CAPPUCCINO</h6>
                            <h6 className="food-item-price">Rs.120</h6>
                            <h6 className="food-item-des">The Viennese style, frothy coffee with milk,
                             topped with a dash of chocolate. Perfectly relaxing.</h6>
                            </div>

                            <div className="food-item">
                            <h6 className="food-item-name">ESPRESSO</h6>
                            <h6 className="food-item-price">Rs.70</h6>
                            <h6 className="food-item-des">A strong black coffee — a blast of energy. Can
                             be had with cold milk to taste.</h6>
                            </div>

                            <div className="food-item">
                            <h6 className="food-item-name">HOT CHOCOLATE</h6>
                            <h6 className="food-item-price">Rs.150</h6>
                            <h6 className="food-item-des">A big nourishing, wholesome cup of whole milk — really
                             chocolaty & frothy.</h6>
                            </div>

                            

                            <h5>SMALL BITES AND STARTERS</h5>
							<div className="food-item">
                            <h6 className="food-item-name">WHOLEWHEAT PITA BREAD WITH HUMMUS</h6>
                            <h6 className="food-item-price">Rs.200</h6>
                            <h6 className="food-item-des">Our bakery's fresh pita served with nutritious Hummus.</h6>
                            </div>

							<div className="food-item">
                            <h6 className="food-item-name">CHILLY CHEESE TOAST</h6>
                            <h6 className="food-item-price">Rs.220</h6>
                            <h6 className="food-item-des">Melted Mozzarella cheese and green chillies on our bakery brown bread.</h6>
                            </div>

                            <div className="food-item">
                            <h6 className="food-item-name">BAKED NACHOS & HOT SALSA</h6>
                            <h6 className="food-item-price">Rs.170</h6>
                            <h6 className="food-item-des">baked Nachos topped with melted cheese served with red salsa.</h6>
                            </div>

                       	</Paper>
                    </div>
          
        );
    }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);