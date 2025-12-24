<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TeslaBullFeed</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f9f9fb;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  header {
    background: linear-gradient(135deg, #e31937, #ff455b); /* красный Tesla-style */
    color: white;
    padding: 14px 16px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  #feed {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .post {
    background: white;
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    font-size: 15px;
    line-height: 1.5;
  }
  .post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #555;
  }
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ccc;
  }
  .username {
    font-weight: 600;
    color: #000;
  }
  .time {
    margin-left: auto;
  }
  .post-text {
    margin-bottom: 10px;
  }
  .post-image {
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
  }
  #input-area {
    flex-shrink: 0;
    padding: 10px 12px;
    background: white;
    border-top: 1px solid #eee;
    display: flex;
    gap: 10px;
    align-items: end;
  }
  #message-input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 15px;
    resize: none;
    min-height: 40px;
    max-height: 120px;
    overflow-y: auto;
  }
  #send-btn {
    background: #e31937;
    color: white;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
  }
</style>
</head>
<body>
  <header>TeslaBullFeed 🚀</header>
  <div id="feed">
    <!-- Примеры постов — замени на свои данные -->
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@elonmusk</div>
        <div class="time">2ч назад</div>
      </div>
      <div class="post-text">Cybertruck production ramp is going extremely well. Deliveries accelerating!</div>
      <img src="https://example.com/cybertruck.jpg" alt="Cybertruck" class="post-image">
    </div>
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@Tesla</div>
        <div class="time">5ч назад</div>
      </div>
      <div class="post-text">Model Y became the world's best-selling vehicle in 2024! Thank you to all our customers ❤️</div>
    </div>
    <!-- Добавляй посты сюда -->
  </div>

  <div id="input-area">
    <textarea id="message-input" placeholder="Поделиться мыслями о Tesla..." rows="1"></textarea>
    <button id="send-btn">➤</button>
  </div>

<script>
  const feed = document.getElementById('feed');
  const input = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  // Авторесайз поля ввода
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  });

  // Отправка по Enter
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendBtn.addEventListener('click', sendMessage);

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@you</div>
        <div class="time">сейчас</div>
      </div>
      <div class="post-text">${text.replace(/\n/g, '<br>')}</div>
    `;
    feed.prepend(newPost); // новый пост сверху
    input.value = '';
    input.style.height = 'auto';
  }
</script>
</body>
</html>
