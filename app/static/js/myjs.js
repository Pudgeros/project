const links = document.querySelectorAll('.my-links');

function highlightLink() {
  links.forEach(link => {
    link.classList.remove('active');
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

highlightLink();

window.addEventListener('hashchange', highlightLink); 


const button = document.querySelector('.anchor');

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past a certain point on the page
  if (window.scrollY > 500) {
    // If so, show the button element
    button.style.display = 'block';
  } else {
    // Otherwise, hide the button element
    button.style.display = 'none';
  }
});


function deleteNews(id) {
    if (confirm('Вы уверены что хотите удалить данную новость?')) {
        alert('Новость удалена');
        window.location.href = '/news_detail/' + id + '/del';
    }
    else {
        alert('Действие отменено');
    }
}

