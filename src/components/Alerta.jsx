const Alerta = ({alerta}) => {
  return (
    
    <div className={`${alerta.success ? 'bg-primary' :'bg-danger'} text-center p-3 text-white font-bold alerta`}>
      {alerta.msg}
    </div>
    
  )
}

export default Alerta;
