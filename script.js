
function sendMessage() {
  const input = document.getElementById('chatInput');
  const chatBox = document.getElementById('chatBox');
  if (input.value.trim() !== "") {
    const message = document.createElement('div');
    message.textContent = input.value;
    chatBox.appendChild(message);
    input.value = "";
  }
}

document.getElementById('noteUpload')?.addEventListener('change', function (e) {
  const preview = document.getElementById('notePreview');
  const file = e.target.files[0];
  if (file) {
    preview.innerHTML = `<p>Uploaded: ${file.name}</p>`;
  }
});
