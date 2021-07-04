## Доступные команды

В папке проекта, вы можете запустить:

### `yarn start` или `npm run start`

Запускает проект в режиме разработки.\
Отркывает [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

### Подстановка ключа в код
По умолчанию в проекте уже подставлен API ключ ,но если у вас закончится количество доступных запросов то вы можете зарегестрироваться на https://openweathermap.org/ и во вкладке `My API keys` скопировать ключ по умолчанию, который будет доступен спустя час после регистрации и задать его в значение константе `API_KEY` в файле `src/components/City.js`.