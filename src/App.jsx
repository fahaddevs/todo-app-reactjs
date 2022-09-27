import './App.css'

function App() {
  return (
    <div className="App">
      <h2 className='app-title'>Todo App</h2>
      <form>
        <input type="text" className='form-control' placeholder='Task' />
        <button type='submit' className='btn'>Add Item</button>
      </form>

      {/* <div className="items-wrapper">
        <div className="item">
          <p className='item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button type='button' className='remove-item'>x</button>
        </div>
      </div> */}
    </div>
  )
}

export default App