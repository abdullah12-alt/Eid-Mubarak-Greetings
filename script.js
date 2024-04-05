document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
  
    // Hide name form, show account form
    document.getElementById('nameForm').style.display = 'none';
    document.getElementById('accountForm').style.display = 'block';
  
    // Display Eid Mubarak message with cousin's name
    document.getElementById('message').textContent = `Eid Mubarak, ${name}!`;
  });
  
  document.getElementById('eidiSubmit').addEventListener('click', function() {
    const accountNumber = document.getElementById('accountNumber').value;
    const name = document.getElementById('name').value;
  
    // Fake money transfer message with cousin's name
    const message = `$100 has been sent to your account (${accountNumber}), from your loving Ahmed to ${name}.`;
  
    // Display the message
    document.getElementById('message').textContent = message;
  });
  