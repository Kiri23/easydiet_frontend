import React from 'react'
import './NewCustomerForm.css'
import SubmitButton from './SubmitButton'
import Checkbox from './Checkbox'
import ObjectID from 'bson-objectid'

const items = [
  'Carne',
  'Pollo',
  'Pescado',
  'Camarones',
  'Cebolla',
  'Nueces'
]
class NewCustomerForm extends React.Component {
  constructor(props) {

    const time = Date.now()
    const id = ObjectID.generate(time)
    super(props)
    this.state = {
      id : id, 
      alergias: [], 
      formStatus: 'default', 
      ul: 'aligned', 
      almuerzos: {},
      cenas: {},
      response: {}}
    this.handleClick = this.handleClick.bind(this)
    this.crearCalendario = this.crearCalendario.bind(this)
    this.handleAlmuerzos = this.handleAlmuerzos.bind(this)
    this.handleCenas = this.handleCenas.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleAlmuerzos(event){
    console.log('calendar')
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        almuerzos:{
          ...this.state.almuerzos,
        [name]: value
      }})
      console.log(this.state.almuerzos)
  }
  handleCenas(event){
    console.log('calendar')
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        cenas:{
          ...this.state.cenas,
        [name]: value
      }})
      console.log(this.state.cenas)
  }
  handleClick(event){
    console.log('Help!')
    console.log(this.state)
  }
  handleChange(event){
    console.log('Change!')
    if(event.target.name === 'nombre'){
      console.log(1)
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
    } else {
      console.log(2)
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
    }

  }
  handleSubmit(event){
    console.log(this.state.id)
    event.preventDefault()
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api'
    const {id, almuerzos, nombre, cenas, apellido, alergias } = self.state
    const payload = {id, almuerzos, cenas, nombre, apellido, alergias }
    const urlOpts = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    console.log(payload)
    fetch(url, urlOpts)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      self.setState({ 
        response: data,
        formStatus: 'saved'});
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  crearCalendario(){
    return (
      <div className='default'>
      <h4> Almuerzos </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='domingo'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='lunes'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='martes'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='miercoles'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='jueves'
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        type='number'
        name='viernes'
        defaultValue='0'
        required
        className='calendar-input'
        onChange={this.handleAlmuerzos} />
      </td>
      <td>
        <input 
        required
        type='number'
        name='sabado'
        className='calendar-input'
        defaultValue='0'
        onChange={this.handleAlmuerzos} />
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      <h4> Cenas </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        onChange={this.handleCenas} 
        name='domingo'
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='lunes'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='martes'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        type='number'
        defaultValue='0'
        name='miercoles'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        type='number'
        name='jueves'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        type='number'
        name='viernes'
        defaultValue='0'
        required
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      <td>
        <input 
        required
        defaultValue='0'
        name='sabado'
        type='number'
        onChange={this.handleCenas} 
        className='calendar-input'/>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      </div>
    )
  }

  toggleCheckbox = label => {
    const index = this.state.alergias.indexOf(label.toLowerCase(),0)
    const Alergias = this.state.alergias
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
      if (index > -1) {
        Alergias.splice(index, 1)
        this.setState({alergias: Alergias})
      }
    } else {
      this.selectedCheckboxes.add(label);
      Alergias.push(label.toLowerCase())
      this.setState({alergias: Alergias})
    }
  }
  createCheckbox = label => (
    <Checkbox
    label={label}
    handleCheckboxChange={this.toggleCheckbox}
    key={label}
    />
  )
  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )
  incluirAlergia = alergia =>
  <li key={alergia}>
  {alergia}
  </li>
  listarAlergias = () => {
    const Alergias = this.state.alergias
    return  Alergias.map(this.incluirAlergia)
  }
  render(){
    const message = this.state.response.message ? this.state.response.message : '*verificar datos antes de guardar.';

    let p = null;
    if (message.charAt(0) === '*') {
      p = <p></p>;
    } else {
      p = <p>{message}</p>;
    }
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className={this.state.formStatus}>
      <label>
      Nombre:
        <input 
      name="nombre"
      type="text" 
      value={this.state.nombre || ''} 
      onChange={this.handleChange} />
      </label>
      <br />
      <label>
      Apellido:
        <input 
      name="apellido"
      type="text" 
      value={this.state.apellido || ''}
      onChange={this.handleChange} />
      </label>
      </div>
      {this.crearCalendario()}
      <div className={this.state.formStatus}>
      <p className='aligned'>
      Seleccione todo ingriediente que no desea incluir en la dieta del cliente.
        </p>
      <hr />
      {this.createCheckboxes()}
      </div>
      <div className={this.state.formStatus}>
      <p>
      Informacion a guardarse
      </p>
      <hr />
      <p className={'aligned'}>
      Nombre Completo: 
        </p>
      <strong>
      {this.state.nombre} {this.state.apellido}
      </strong>
      <p className={'aligned'}>
      Dias de consumo:
        </p>
      <div className='default'>
      <h4> Almuerzos </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.domingo}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.lunes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.martes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.miercoles}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.jueves}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.viernes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.almuerzos.sabado}
        </span>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      <h4> Cenas </h4>
      <div className='container'>
      <table className='listado'>
      <thead>
      <tr>
        <th>Domingo</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.domingo}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.lunes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.martes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.miercoles}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.jueves}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.viernes}
        </span>
      </td>
      <td>
        <span 
        className='calendar-input'>
        {this.state.cenas.sabado}
        </span>
      </td>
      </tr>
      </tbody>

      </table>
      </div>
      </div>
      
      
      <p className={'aligned'}>
      Ingredientes no deseados:
        </p>
      <ul className={this.state.ul}>
      {this.listarAlergias()}
      </ul>
      <br />
      {p}
      <SubmitButton handleClick={this.handleClick}/>
      </div>
      </form>
      </div>
    )
  }
}

export default NewCustomerForm
