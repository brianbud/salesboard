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
let totalCommEl = document.getElementById('comission');

let totalSales = 0;
let totalRevenue = 0;
let totalCommision = 0;
let productASales = [];
let productBSales = [];

function renderNewSale() {
  addRevenue();
  updateTotalSales();
  addToCounter();
  addCommission();
  console.log(event.target.id);
}

function addToCounter() {
  if (event.target.id === 'prodA') {
    salesEl.textContent += productA.emoji;
    productASales.push(productB.emoji);
  } else {
    salesEl.textContent += productB.emoji;
    productBSales.push(productB.emoji);
  }
}

function updateTotalSales() {
  totalSales++;
  totalSalesEl.textContent = totalSales;
}

function addRevenue() {
  if (event.target.id === 'prodA') {
    totalRevenue += productA.revenue;
  } else {
    totalRevenue += productB.revenue;
  }

  totalRevenueEl.textContent = `$ ${totalRevenue}`;
}

function addCommission() {
  if (event.target.id === 'prodA') {
    totalCommision += productA.commision;
  } else {
    totalCommision += productB.commision;
  }

  totalCommEl.textContent = `$ ${totalCommision}`;
}
