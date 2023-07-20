import React from 'react';
import {add,sub ,mult ,div} from './Appp'
function App(){
    return (
        <>
        <ol>
         
         <li>The sum is = {add(40,4)} </li>
         <li>The subtraction is = {sub(40,4)}</li>
         <li> The Multiplication is = {mult(40,0)}</li>
         <li> The dividation is ={div(40,3)}</li>
        </ol>
        </>
    );
}
export default App;