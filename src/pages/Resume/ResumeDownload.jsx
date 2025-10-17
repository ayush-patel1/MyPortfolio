import { FaDownload, FaFilePdf } from 'react-icons/fa';
import Resume from '../../assets/Resume.pdf';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const handleDownload = () => {
    const resumeUrl = Resume; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ayush_Resume.pdf'; 
    link.click();
  };

  return (
    <div className="resume-download-container">
      <button
        onClick={handleDownload}
        className="resume-download-btn"
      >
        <span className="btn-icon">
          <FaFilePdf />
        </span>
        <span className="btn-text">Download Resume</span>
        <span className="btn-download-icon">
          <FaDownload />
        </span>
        <span className="btn-shine"></span>
      </button>
      <p className="download-hint">Click to download PDF version</p>
    </div>
  );
};

export default ResumeDownload;
  