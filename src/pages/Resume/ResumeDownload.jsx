
import Resume from '../../assets/Resume.pdf'
const ResumeDownload = () => {
    const handleDownload = () => {
      const resumeUrl = Resume; 
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'resume.pdf'; 
      link.click();
    };
  
    return (
      <div>
        <button
          onClick={handleDownload}
          style={{
            margin:'3rem 1rem',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#FFD700', // Golden Yellow
            color: '#000000', // Black
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Download Resume
        </button>
      </div>
    );
  };

  export default ResumeDownload;
  