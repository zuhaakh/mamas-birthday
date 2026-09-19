const wishButton = document.querySelector('#wish-button');
let resetTimer;
wishButton.addEventListener('click', () => {
  clearTimeout(resetTimer);
  document.querySelector('.cake-card').classList.add('wished');
  document.querySelector('#cake-caption').textContent = 'may all your wishes come true, Mama ♡';
  wishButton.innerHTML = 'One more birthday wish <span>♡</span>';
  const confetti = document.querySelector('.confetti');
  confetti.replaceChildren();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 55; i++) {
      const piece = document.createElement('i');
      piece.textContent = ['♡', '✧', '✿', '•'][i % 4];
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.color = ['#92b9d6', '#c4dbea', '#dfb9bb', '#d8bf87'][i % 4];
      piece.style.animationDelay = `${Math.random() * .8}s`;
      piece.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
      confetti.append(piece);
    }
  }
  resetTimer = setTimeout(() => confetti.replaceChildren(), 4500);
});
document.querySelectorAll('.love-note').forEach(note => {
  note.addEventListener('click', () => {
    const expanded = note.getAttribute('aria-expanded') === 'true';
    note.setAttribute('aria-expanded', String(!expanded));
    note.querySelector('.note-secret').hidden = expanded;
    note.querySelector('.note-action').textContent = expanded ? 'a little more love +' : 'keep this close −';
  });
});
