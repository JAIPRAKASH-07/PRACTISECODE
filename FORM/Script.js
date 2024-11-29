

function handleSubmit() {
  const object = {
    name: document.getElementById('nameid').value,
    fname: document.getElementById('fNameid').value,
    email: document.getElementById('emailid').value,
    pass: document.getElementById('passid').value,
    date: document.getElementById('Dateid').value,
    time: document.getElementById('Timeid').value,
    phone: document.getElementById('Phoneid').value,
    city: document.getElementById('citySelect').value,
    gender: document.querySelector('input[name="gender"]:checked')?.value || 'Not selected',
    qualifications: Array.from(document.querySelectorAll('input[name="Qualifications"]:checked')).map(cb => cb.value),
  };

   console.log(object);

  if (!object.city) {
    alert('Please select a city!');
  } else if (!object.qualifications.length) {
    alert('Please select at least one qualification!');
  } else {
    alert(`Form Submitted Successfully!\n`);
  }
}
//  function reset() {

    
//  }