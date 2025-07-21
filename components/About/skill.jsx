import'./about.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const skills=[
  {name:'HTML',value:'90'},
  
];


const skill = () => {
  return (
    <div style={{ width: '100px' }}>
     <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <CircularProgressbar
            value={skill.value}
            text={`${skill.value}% `}
          
            styles={buildStyles({
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${skill.value / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
            })}
          />
          <p style={{ marginTop: '10px' }}>{skill.name}</p>
        </div>
      ))}
    </div>
  )
}

export default skill
