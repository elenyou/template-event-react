import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart +1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal = {()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}% </span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 25th November</h3>
                            <p>Aenean vel sem libero. Integer molestie rhoncus lorem, sit amet lobortis ligula dapibus ac. In massa mauris, facilisis in ullamcorper non, lacinia nec dui. Integer ac semper purus, eu condimentum ex. Vivamus auctor est tempor arcu malesuada, tincidunt egestas nisi feugiat. Nam ornare tempus ullamcorper.</p>
                            
                            <MyButton 
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />

                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;