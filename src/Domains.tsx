import "../App.css";

const Domains = () => {
  const domains = [
    "HEALTHCARE AND BIOMEDICAL TECHNOLOGY",
    "AGRICULTURAL AND RURAL DEVELOPMENT",
    "DEFENSE AND SECURITY SYSTEMS",
    "ROBOTICS AND AUTONOMOUS SYSTEMS",
    "IMMERSIVE AND EDUCATIONAL TECHNOLOGY",
    "ENERGY AND ENVIRONMENTAL STABILITY",
    "INDUSTRIAL AUTOMATION AND CONTROL SYSTEMS",
    "STUDENT INNOVATION"
  ];

  return (
    <section className="domains-section">
      <h2 className="domain-header">EVENT DOMAINS</h2>
      <div className="domains-list-wrapper">
        {domains.map((text, index) => (
          <div key={index} className="domain-item-row">
            <span className="gold-dot">•</span>
            <p className="domain-item-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;