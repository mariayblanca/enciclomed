  
const enfermedadess_array = ['Alzehimer', 'Botulismo', 'Coronavirus', 'GripeA'];
setTimeout(function addTeam() {
  const enfermedades = document.querySelector('ul.enfermedades');
  const enfermedad = document.createElement('li');
  enfermedad.textContent = enfermedadess_array[parseInt(Math.random() * enfermedadess_array.length, 10)];
  enfermedades.appendChild(enfermedad);
  enfermedad.classList.add("newClass");
}, Math.random() * 1000)

setTimeout(function removeIllness() {
  const enfermedades = document.querySelector('ul.enfermedades');
  eenfermedades.removeChild(enfermedades.querySelector('li'));
}, Math.random() * 3000 + 3000)