// Product A info
let productA = {
  emoji: '⭐',
  revenue: 200,
  commision: 50,
};

// Product B info
let productB = {
  emoji: '🔥',
  revenue: 300,
  commision: 75,
};

let salesEl = document.getElementById('sales-counter');
let totalSalesEl = document.getElementById('total-sales');
let totalRevenueEl = document.getElementById('revenue');

let totalSales = 0;
let totalRevenue = 0;
let productASales = [];
let productBSales = [];

function addProdA() {
  addRevenue();
  updateTotalSales();
  salesEl.textContent += productA.emoji;
  productASales.push(productA.emoji);
}

function addProdB() {
  updateTotalSales();
  salesEl.textContent += productB.emoji;
  productBSales.push(productB.emoji);
}

function updateTotalSales() {
  totalSales++;
  totalSalesEl.textContent = totalSales;
}

function addRevenue() {
  totalRevenue += productA.revenue;
  totalRevenueEl.textContent = `$ ${totalRevenue}`;
}
