const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#stat-name').value.trim();
    const needed_funding = document.querySelector('#stat-funding').value.trim();
    const description = document.querySelector('#stat-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/stat`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create stat');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/stat/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete stat');
      }
    }
  };
  
  document
    .querySelector('.new-stat-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.stat-list')
    .addEventListener('click', delButtonHandler);
  