function navigateTo(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Update total price on quantity change
  document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', updateTotal);
  });
  
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.menu-item').forEach(item => {
      const price = parseFloat(item.getAttribute('data-price'));
      const quantity = parseInt(item.querySelector('.quantity').value);
      total += price * quantity;
    });
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  // Place Order and Show Payment Options
  document.getElementById('placeOrder').addEventListener('click', () => {
    let totalAmount = parseFloat(document.getElementById('total').textContent);
    if (totalAmount > 0) {
      document.getElementById('payment').classList.remove('hidden');
    } else {
      alert('Please add items to your order.');
    }
  });
  
  // Simulate Payment Processing
  function payNow(method) {
    alert(`Thank you for choosing ${method}! Your order is being processed.`);
    // Clear cart after order
    document.querySelectorAll('.quantity').forEach(input => input.value = 0);
    document.getElementById('total').textContent = '0';
    document.getElementById('payment').classList.add('hidden');
  }