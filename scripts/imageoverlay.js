// JavaScript to show overlay image

  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeModal');

  // Open modal and load the full-size image
  document.querySelectorAll('.artimage').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.dataset.full || img.src;
      modal.showModal();
    });
  });

  // Close when clicking the X button
  closeBtn.addEventListener('click', () => modal.close());

  // Close when clicking outside the image on the dark backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });