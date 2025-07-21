import'./about.css';

const goalIconsComponent = ({icon,name,value}) => {
  return (
    <div className='about__goal'>
    <span className="icon ">{icon}</span>
    <p> <strong>{value}</strong> <h5 className='p-h5'>{name}</h5> </p>
   </div>
  )
}

export default goalIconsComponent
