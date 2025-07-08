import { Component } from "react";
import LeelaClassComp from "./LeelaClassComp";

class MuraliClassComp extends Component {
  constructor(props) {
    super(props);

    // this is called as State in Parent Component
    this.state = {
      message: "Welcome to MuraliClassComp !! from Parent ", //
      showPicture:false
    };
    // this.changeMessageInParent = this.changeMessageInParent.bind(this) // binding the CUrrent Event to this Component 
  }

  // If you want to change any Value Inside State , you should call this.setState methon
    changeMessageInParent = ()=>{
      this.setState({
          message:"Value Changed when you Click on the Button !!!"
      })
    }

//   changeMessageInParent(params) {
//     this.setState({
//       message: "Value Changed when you Click on the Button !!!",
//     });
//   }

  render() {
    return (
      <div>
        <h2>Welcome to Murali Component !!</h2>
        <button onClick={this.changeMessageInParent}>Change Message </button>
        <hr />
        {/* If you send Same stare Values to Child Component , it is called Prop  */}
        <LeelaClassComp newMessage={this.state.message} />
        {this.state.showPicture &&         <img src="https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=" alt="" />
}
      </div>
    );
  }
}

//Since LeelaClassComp is Inside MuraliClassComp
// MuraliClassComp is Parent
// LeelaClassComp is Child

export default MuraliClassComp;
