const familyArticleDesc = document.getElementById('familyArticleDesc')

window.addEventListener('scroll', function() {
  if (window.scrollY === 0) {
    if (!familyArticleDesc.classList.contains('gradient')) {
      familyArticleDesc.classList.add('gradient')
     }
  } else {
    if (familyArticleDesc.classList.contains('gradient')) {
      familyArticleDesc.classList.remove('gradient')
     }
  }
 
});