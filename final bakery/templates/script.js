function calculateTotal() {
    const itemSelect = document.getElementById('item');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    let totalCost = 0;
  
    // Calculate total cost based on selected items
    Array.from(itemSelect.selectedOptions).forEach(option => {
        const itemPrice = parseFloat(option.value);
        totalCost += itemPrice * quantity;
    });
  
    // Display the total cost
    document.getElementById('total-cost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
  }
  
  function placeOrder() {
    alert("Order placed successfully!");  // Replace with actual order submission logic
  }
  