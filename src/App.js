
import {firebase} from './firebase/config'


function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        firebase.firestore().collection('products').add({
          name:'AA',
          price:25,
          color:'white'
        })

      }
      }>Click me</button>
    </div>
  );
}

export default App;
