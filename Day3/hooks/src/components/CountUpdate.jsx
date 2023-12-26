/* 
   3.  No more method bindings 

Now for the same ShowCount component let’s introduce a method to update the count of the state when the user clicks on the label.
To use handleClickEvent method first, we have to bind it to this of the Component.

            this.handleClickEvent = this.handleClickEvent.bind(this);

We have to do this because the execution context is different when the method gets executed. 
For a beginner developer, this might be a bit hard to understand.

*/



            //OLD CLASS BASED APPROACH TO UPDATE COUNT
// export class ShowCount extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//       this.handleClickEvent = this.handleClickEvent.bind(this);
//     }
//     componentDidMount() {
//       this.setState({
//         count: this.props.count
//       });
//     }
//     handleClickEvent() {
//       this.setState({count: this.state.count + 1});
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClickEvent} >Increment</button>
//           <h1> Count : {this.state.count} </h1>
//         </div>
//       );
//     }
//   }

                // HOOKS BASED APPROACH TO UPDATE COUNT
import { useState } from "react";

export function CountUpdate(props) {
    const [count, setCount] = useState(0);
                  
                  
    const handleClickEvent =() =>  {
        setCount(count => count + 1);
    }
                  
    return (
        <div>
            <button onClick={handleClickEvent}>Increment Count</button>
            <h1> Count : {count} </h1>
        </div>
    );
}