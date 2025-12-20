const products = [
  { id: 1, name: "Modern Velvet Sofa", category: "Furniture", price: 250 },
  { id: 2, name: "Wooden Coffee Table", category: "Furniture", price: 250 },
  { id: 3, name: "Smart LED TV", category: "Electronics", price: 500 },
  { id: 4, name: "LED", category: "Electronics", price: 500 },
];

const cat = {};


products.forEach(p => cat[p.category] = (cat[p.category] ? cat[p.category] += p.price : p.price));

const chartData = Object.keys(cat).map(c=> ({category:c ,total:cat[c] }) );


console.log(chartData);