function calculateRevenue() {
  const monthlyViewers = parseFloat(document.getElementById('monthlyViewers').value);
  const totalAdImpressions = parseFloat(document.getElementById('totalAdImpressions').value);

  const revenue = (monthlyViewers / 10) * totalAdImpressions; // Equation updated
  const resultElement = document.getElementById('monthlyRevenue');
  
  if (!isNaN(revenue)) {
    resultElement.textContent = `Monthly Revenue: $${revenue.toFixed(2)}`;
  } else {
    resultElement.textContent = 'Please enter valid inputs';
  }
}
