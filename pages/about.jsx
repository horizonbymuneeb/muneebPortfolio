import { FaPython, FaBrain, FaDatabase, FaMicroscope, FaNodeJs, FaDocker, FaSkullCrossbones, FaChartLine, FaTable, FaChartBar, FaChartPie, FaServer } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiBlockchaindotcom } from "react-icons/si";
import { FcAbout } from "react-icons/fc";

const AboutPage = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 ">
      <div className="about">
            <FcAbout size={30} color="#4485FF" /> <h1>About Me</h1>
          </div>
      <div className="aboutline">
            <p>Hello! My name is Muneeb Anjum.I am a Data Scientist and AI Engineer with a passion for software development. I have experience in building AI models, data analysis, and software development. I am always looking for new challenges and opportunities to learn and grow.</p>        </div>
      <div className="abouttech">
            <p>Here are a few technologies I’ve been working with recently:</p>
        </div>
        <div className="technologies">
          <div className="technology">
            <FaPython color="#3572A5" /> <span>Python</span>
          </div>
          <div className="technology">
            <FaBrain color="#DE8F36" /> <span>AI</span>
          </div>
          <div className="technology">
            <FaDatabase color="#316D8F" /> <span>Data Science</span>
          </div>
          <div className="technology">
            <FaMicroscope color="#4485FF" /> <span>Machine Learning</span>
          </div>
          <div className="technology">
            <FaNodeJs color="#F7DF1E" /> <span>NodeJS</span>
          </div>
          <div className="technology">
            <FaDocker color="#2496ED" /> <span>Docker</span>
          </div>
          <div className="technology">
            <SiBlockchaindotcom color="#007ACC" /> <span>Blockchain</span>
          </div>
          <div className="technology">
            <SiTensorflow color="#FF6F00" /> <span>TensorFlow</span>
          </div>
          <div className="technology">
            <SiPytorch color="#EE4C2C" /> <span>PyTorch</span>
          </div>
          <div className="technology">
            <FaSkullCrossbones color="#F0D91D" /> <span>Scikit-learn</span>
          </div>
          <div className="technology">
            <FaChartLine color="#F37626" /> <span>Pandas</span>
          </div>
          <div className="technology">
            <FaTable color="#013243" /> <span>NumPy</span>
          </div>
          <div className="technology">
            <FaChartBar color="#D61C35" /> <span>Matplotlib</span>
          </div>
          <div className="technology">
            <FaChartPie color="#6DC7D1" /> <span>Seaborn</span>
          </div>
          <div className="technology">
            <FaServer color="#64B5F6" /> <span>SQL</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .technologies {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }

        .technology {
          flex: 0 0 calc(33.33% - 20px); /* Three columns in one row with margin */
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 10px 20px 10px; /* Added margin */
          padding: 10px; /* Added padding */
          border-radius: 8px; /* Rounded corners */
          border: 2px solid #ccc; /* Border */
        }

        .technology span {
          margin-left: 5px; /* Add spacing between icon and text */
        }

        .technology :global(svg) {
          font-size: 24px;
        }
        .container {
          margin-top: 150px;
        }
        .about {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about h1 {
          margin-left: 15px; /* Add spacing between icon and text */
          font-size: 30px;
          font-family: 'Monaco', Monospace;
        }
        .aboutline {
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          text-align: center;
          font-family: 'Monaco', Monospace;
        }
        .abouttech {
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          text-align: center;
          font-family: 'Monaco', Monospace;
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
