import React from "react";
import { Link } from "react-router-dom";
import Main from "../../assets/landing/tgr-main.jpg"
import "./style.css"
// import "./parallax.js"

// const About = () => {
//   return (

//   <div className="container-fluid">
//           <div data-offset="30" className="poster">
//           <div className="shine"></div>
//           <div data-offset="-1" className="layer-1"></div>
//           <div className="layer-2"></div>
//           <div data-offset="10" className="layer-3"></div>
//           <div data-offset="20" className="layer-4"></div>
//           <div data-offset="50" className="layer-5"></div>
//       </div>

//     {/* <Link to="/">
//         <img
//             src={ Main }
//             width="500"
//             height="500"
//             className="d-inline-block align-top"
//             alt="blue portal" 
//         />
//       </Link> */}
//   </div>
//   )
//   };

// export default About;

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      showingAlert: false
    };
  }
  
  handleClickShowAlert() {
    this.setState({
      showingAlert: true
    });
    
    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 30000);
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            {/* <button onClick={this.handleClickShowAlert.bind(this)}>
              The Gate Room
            </button> */}
          </div>
              {/* <div className={`${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}> */}
                <div data-offset="30" className="poster">
                  <div className="shine"></div>
                  <div data-offset="-1" className="layer-1"></div>
                  <div className="layer-2"></div>
                  <div data-offset="10" className="layer-3"></div>
                  <div data-offset="20" className="layer-4"></div>
                  <div data-offset="50" className="layer-5"></div>
                </div>
              {/* </div> */}
        </div>
      </div>
    );
  }
}

export default About;