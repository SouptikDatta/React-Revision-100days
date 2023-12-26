/*
  1.   Don’t have to refactor a functional component into a class component when it grows

Usually, there are times when a React component starts with a functional component, 
which only depends on the props and later evolves into a Class component with having a state.
Changing from a functional component to a class component requires a little bit of refactoring, 
depending on how complex the component is.

With React Hooks, since functional components have the capability of tapping into the state, 
the refactoring effort will be minimal. Let’s consider the below example.


   2.  don’t have to worry about “this” keyword anymore

One of the reasons for this confusion is this keyword. If you are familiar with JavaScript, 
you know that this in JavaScript doesn’t work exactly like in other languages. 
When it comes to React Hooks, you don’t have to worry about this at all.

*/
 
 
 
                //OLD CLASS BASED APPROACH
// export class ShowCount extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
//     componentDidMount() {
//       this.setState({
//         count: this.props.count
//       })
//     }
  
//     render() {
//       return (
//         <div> 
//           <h1> Count : {this.state.count} </h1>
//         </div>
//       );
//     }
// }

              //  HOOK BASED APPROACH 
import { useEffect, useState } from "react";

export function ShowCount(props) {
    const [count, setCount] = useState(0);
              
    useEffect(() => console.log(count));
              
    return (
        <div>
            <h1 onClick={()=>setCount(count+1)}> Show Count : {count} </h1>
        </div>
    );
}