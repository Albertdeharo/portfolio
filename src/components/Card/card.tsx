import './../Card/card.scss';

const Card = () => (
  <div className="card">
    <div className="glass-panel">
      <h1><a href="https://superdevresources.com/glassmorphism-ui-css/" target="_blank">Glassmorphism CSS Panels and Buttons</a></h1>
      <p>Glassmorphism is achieved using transparency and background blur to get a frosted-glass like effect.</p>
      <div className="neon-button">
        <a className="glass-button" href="#">ACTION 1</a>
        <a className="glass-button" href="#">ACTION 2</a>
      </div>
    </div>
  </div>
);

export default Card;