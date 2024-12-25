import "./style.css"
const Home = () => {
    return (
        <div>
      <h1 className="text-5xl uppercase font-bold text-green-500 text-center my-5">
        Microdeft React Test Md Rasif
      </h1>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Design Patterns"
            />
            <div className="status-badge">FAILED</div>
          </div>
          <div className="card-content">
            <div className="author">
              <img
                src="https://via.placeholder.com/40"
                alt="Author"
                className="author-image"
              />
              <span className="">Logan Faerber</span>
            </div>
            <h3 className="card-title">
              Creational Design Patterns in Java/J2EE
            </h3>
            <p className="card-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="view-detail">VIEW DETAIL</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;