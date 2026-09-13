const mockDatabase = [
      { title: "Paradoxical Sajid 1", author: "Arif Azad", category: "Islamic", type: "Book", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&q=80" },
      { title: "Paradoxical Sajid 2", author: "Arif Azad", category: "Islamic", type: "Book", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&q=80" },
      { title: "Deyal", author: "Humayun Ahmed", category: "Novel", type: "Book", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=100&q=80" },
      { title: "Wireless Bluetooth Headphones", author: "Brand: Baseus", category: "Electronics", type: "Gadget", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80" },
      { title: "Smart Watch Series 8", author: "Brand: Xiaomi", category: "Electronics", type: "Gadget", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80" }
    ];

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      
      if (query.length === 0) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
      }

      const filtered = mockDatabase.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.author.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

      renderSearchResults(filtered);
    });

    function renderSearchResults(results) {
      if (results.length === 0) {
        searchResults.innerHTML = `<div style="padding:12px 16px; color:var(--text-muted); font-size:0.9rem;">কোনো ফলাফল পাওয়া যায়নি</div>`;
      } else {
        searchResults.innerHTML = results.map(item => `
          <a href="#" class="suggestion-item">
            <img src="${item.img}" alt="${item.title}">
            <div class="suggestion-info">
              <div class="suggestion-title">${item.title}</div>
              <div class="suggestion-meta">${item.author}</div>
            </div>
            <span class="suggestion-badge">${item.type}</span>
          </a>
        `).join('');
      }
      searchResults.classList.add('active');
    }

    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    const openDrawerBtn = document.getElementById('openDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawer');
    const sideDrawer = document.getElementById('sideDrawer');
    const overlayBackdrop = document.getElementById('overlayBackdrop');

    function toggleDrawer() {
      sideDrawer.classList.toggle('active');
      overlayBackdrop.classList.toggle('active');
    }

    openDrawerBtn.addEventListener('click', toggleDrawer);
    closeDrawerBtn.addEventListener('click', toggleDrawer);
    overlayBackdrop.addEventListener('click', toggleDrawer);

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function setSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      currentSlide = index;
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    setInterval(() => {
      let nextIndex = (currentSlide + 1) % slides.length;
      setSlide(nextIndex);
    }, 5000);