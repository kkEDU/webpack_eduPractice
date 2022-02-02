import React from "react";
import $ from 'jquery';


export default class App extends React.Component {
   componentDidMount() {
      $('<h1></h1>')
         .text('Hello world from Jquery')
         .css({
            textAlign: 'center',
            color: 'red'
         })
         .appendTo($('header'))
   }

   
   render() {
      return (
         <React.Fragment>
            <header></header>

            <hr/>

            <div className="box">
               <h2 className="box-title"> Box Title</h2>

               <p className="box-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ea reprehenderit, labore quam ad id? Accusantium impedit tempora aut. Illo.</p>
            </div>
         </React.Fragment>
      )
   }
}