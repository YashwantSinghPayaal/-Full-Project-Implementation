function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      const btn = document.createElement('button');
      btn.textContent = '❌';
      btn.onclick = () => deleteTask(index);
      li.appendChild(btn);
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const input = document.getElementById('taskInput');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (input.value.trim()) {
      tasks.push(input.value);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
      loadTasks();
    }
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  const products = [
    { name: "Laptop", category: "electronics", price: 1200, rating: 4.5 },
    { name: "T-Shirt", category: "clothing", price: 20, rating: 4.0 },
    { name: "Headphones", category: "electronics", price: 100, rating: 4.8 },
    { name: "Jeans", category: "clothing", price: 40, rating: 4.3 }
  ];
  
  function displayProducts(productArray) {
    const list = document.getElementById('productList');
    list.innerHTML = '';
    productArray.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product-item';
      div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Price: $${p.price}<br>Rating: ${p.rating}`;
      list.appendChild(div);
    });
  }
  
  function filterProducts() {
    const category = document.getElementById('category').value;
    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
  }
  
  function sortProducts() {
    const sortBy = document.getElementById('sort').value;
    let sorted = [...products];
    if (sortBy === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    displayProducts(sorted);
  }
  
  window.onload = () => {
    loadTasks();
    displayProducts(products);
  };