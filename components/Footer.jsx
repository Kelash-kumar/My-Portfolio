import { useUser } from '../UserContext';

const Footer = () => {
  const user = useUser();
  const { social} = user;
  console.log(social);

  return (
   
  <footer>
  <div className="footer-container">
    <div className="left-col">
     {
      social.map((item,index) =>{
        return (
          <a   href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
            {item.icons}
          </a>
        )
      })
     }
    
      <p className="rights-text">© 2023 Created By Engineer Kelash Kumar  all Rights Reserved.</p>
    </div>
     </div>
   </footer>
  )
}

export default Footer
