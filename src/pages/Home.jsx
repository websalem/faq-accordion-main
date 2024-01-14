import '../assets/scss/style.scss';
import iconStar from '../assets/images/icon-star.svg';
import Question from '../components/Question';
const Home = () => {

  return (
   <main>
    <div className="top-sec"></div>
    <div className="bottom-sec"></div>
    <div className="faq-sec">
     <div className="faq-title">
     <img src={iconStar} alt="icon star" />
     <h1>FAQs</h1>
     </div>
     <Question title="What is Frontend Mentor, and how will it help me?"
     para={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."}
     />
     <Question title={"Is Frontend Mentor free?"}
     para={"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."}
     />
     <Question title={'Can I use Frontend Mentor projects in my portfolio?'}
     para={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"}
     />
     <Question title="How can I get help if I'm stuck on a challenge?"
     para={"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."}/>
      
    </div>
   </main>
   
  
  )
}
export default Home