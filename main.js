import './style.css'

const key = import.meta.env.VITE_KEY;

document.querySelector('#app').innerHTML = `
  <div >
    Key: ${key}
  </div>
`;
