AMOCRM.widgets.init().then(() => {
  const BLOCKED_CHATS = [
    "Архипка работа подработка",
    "Архипка из рук в руки",
    "Средства размещения",
  ];

  AMOCRM.widgets.Messenger.on("new_message", (msg) => {
    const isBlockedChat = BLOCKED_CHATS.some(chat =>
      msg.chat_name === chat || msg.chat_id === chat
    );

    if (isBlockedChat) {
      console.log(`Блокировка чата: ${msg.chat_name || msg.chat_id}`);
      // Отменяем стандартное поведение (создание сделки)
      return false;
    }
  });
});