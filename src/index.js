import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Component } from 'react';
//1.
//JSX Basics

//const element = <h1>Hello World People</h1> ;    // JSX :javascript icindeki HTMLs
// const isim = 'Ahmet' 
//const element = <p> Hello World <b> {isim} </b></p> ;    // JSX :javascript icindeki HTML


// ReactDOM.render( (
//                     <div>
                    
//                     <p> Hello World <b> {isim} </b></p>
//                     <p>Lorem ipsum dolor sit amet.</p>
                    
//                     </div>   


//                  )  , document.getElementById('root'));


                 //ONEMLI IKI KURAL:
                 //1.JSX icerisinde birden fazla tag kullaniyorsak mutlaka dista bir parantez olmalidir.
                 //2.Bu taglari cover edici parent taga ihtiyacimiz vardir. ornegin div veya Fragment gibi

                
                 

            //      const elemanlar = ( 
            //       <div>
            //             <h1>Hilmi hosgeldin</h1>
            //             <h3>Köln</h3>
            //       </div>   
            //                         )

            //      ReactDOM.render(elemanlar , document.getElementById('root'));

            //ReactDOM.render(degisken veya component , document.getElementById('root')); 


// 2.
// class ile className arasindaki fark nedir?
// React'ta mutlaka bir acilis tag'i bir de closing tag olmak zorunda.
// <br> <hr> <img> <input> taglari <br /> <hr /> <img /> <input /> seklinde kullanilmali. react 'ta bu tag ler bu sekilde mutlaka kapatilmalidir.


// const elemanlar = ( 
//       <div>
//             <h1>Hilmi hosgeldin</h1>
//             <br/>
//             <h3 className="text"   >Köln</h3>
//       </div>   
//       )

// ReactDOM.render(elemanlar , document.getElementById('root')); 

//3.
//JS degiskenlerini HTML icinde kullanma
// var toplam = 3 + 9;
// var name = ' Mehmet';
// const elemanlar = ( 
//       <div>
//            <p>2 + 3 = {2 + 3}</p>
//            <p>Toplam: {toplam}</p>
//            <p>{`Toplam: ${toplam}`}</p>
//            <p>My name is {name} </p>
//       </div>    
//       )

// ReactDOM.render(elemanlar , document.getElementById('root')); 

//4.
//degiskenlerin  HTML attributes ile birlikte kullanilmasi

// const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
// const alternatif = "Picture of Goose";
// const title = "Picture of Goose";

// const gooseImg = <img src={goose} alt={alternatif} title ={title}/> 

// ReactDOM.render(gooseImg , document.getElementById('root')); 

// 5. event atamak
// function atama ve kullanma
// fonksiyona onClick={makeDoggy()} yazarsak hata veriyor,NEDEN?
// CUNKU, sayfa yuklenir yuklenmez fonksiyonu icra ediyor ve click olmadigi icin e.target 'da olusmuyor ve hata veriyor.

// function makeDoggy(e) {
     
//       e.target.setAttribute ('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
//       e.target.setAttribute ('alt', 'doggy');

//       // ikinci yontem: böyle de yazilabilirdi
//       // e.target.src ="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg"
    
     

// }

// const kitty = <img 
//                   src= "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg "
//                   alt="kitty"
//                   width ="250"
//                   height = "250"
//                   onClick = {makeDoggy}
//             /> 

// ReactDOM.render(kitty , document.getElementById('root')); 


// 6. 
// if conditions HTML taglari icerisnde kullanimi
// const age = Math.floor(Math.random()* 50);

// const yetiskinMi = <p>
//                   { age < 18 ? `Evet cocuk yasinda ${age}` : `Evet yetiskin yasinda ${age}`}

//                   </p>


// ReactDOM.render (yetiskinMi , document.getElementById('root'));

 //7
 //map() functions

// const links = ['Home', 'Services', 'Team', 'About Me'];

// const list = (
//                <ul >
//                     {links.map( (item,index) => {
//                          return <li key= {index}>{item}</li>
//                     } )}
               
//                </ul>
// )

// ikinci yol (farkli bir gösterim)
// const liELem = links.map( (item,index) => {
//                                         return <li key= {index}>{item}</li>

//                                          } )
// const list = ( <ul>{liELem}</ul> )


//  ReactDOM.render ( list  ,document.getElementById('root'));

//8.
// first component
// rcc: react class comp.
// rfc:react funk.comp. 




// class App extends Component {
//      render() {
//           return (
//                <div>
//                     <h1>Hello World!</h1>
//                </div>
//           );
//      }
// }

// export default App;
// ReactDOM.render (<App />, document.getElementById('root'));





// function App() {
// // Bu alana js ile alakali hersy yazilabilir.Ornegin degisken atayabilirz.
// const toplam = 2 + 3;

//      return (
//           <div>
//                <h3>Sayilarin Toplami 2 + 3</h3>
//                <p>{toplam}</p>
//           </div>
//      )
// }
// export default App;

//  ReactDOM.render (<App/>, document.getElementById ('root'));




class App extends Component {
     // burdaki toplam 2 degiskeni class a ailt bir degiskendir.
     //toplam2 nin basina const var veaya let yazmama gerek yok,cunku bu zaten class in bir elemanidir. 
     toplam2 = 5 + 2

     // sayiUret = (val) => {
     //      return val*val
     // }
     //ÖNEMLI: burda tek satirlik bir kod yazdigimiy icin suslu paratezi ve return u kaldirabilirz.
     sayiUret = (val) => val * val

     sayiVer = () => Math.floor(Math.random()*100)
     ;

     render() {
     const toplam = 4 + 6

     const sayiVerRender = () => Math.floor(Math.random()*100);

               return (
               <div>
               <h3>Sayilarin Toplami 4 + 6</h3>
               <p>toplam from render-{toplam}</p>

                {/* burda this kullanmak zorundayiz. this ifadesi class degiskenini temsil etmektedir. */}

               <p>toplam from class:{this.toplam2}</p>
               <p>toplam from class:{this.sayiUret(6)}</p>
               <p>toplam from class:{this.sayiVer()}</p>
               <p>sayiVerRender:{sayiVerRender()}</p>
               </div>
          );
     } 
}

export default App;
ReactDOM.render (<App/>, document.getElementById ('root'));