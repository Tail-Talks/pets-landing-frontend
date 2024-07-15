
# Документация front-end

## Обзор проекта

## Предварительные требования

Необходимые инструменты:

- Node.js (версия >= 14.x)
- npm (версия >= 6.x)

## Начало работы

Для начала работы с проектом:

### 1. Клонируйте репозиторий

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Переключитесь на ветку `dev`

```bash
git checkout dev
```

### 3. Установите зависимости

```bash
npm install
```

## Разработка

Для запуска сервера разработки используйте следующую команду:

```bash
npm start
```

Это запустит сервер разработки по адресу `http://localhost:3000/`.

## Скрипты

В проекте доступны следующие скрипты:

- `npm start`: Запускает сервер разработки.
- `npm run build`: Собирает приложение для продакшена.
- `npm test`: Запускает тестовый набор.
- `npm run eject`: Извлекает конфигурацию Create React App (используйте с осторожностью).

## Стилизация

В проекте используется Tailwind CSS для стилизации. Вы можете добавлять классы Tailwind непосредственно в ваши компоненты React. Для более тонкой настройки можно изменить файл `tailwind.config.js`.

## TypeScript

Проект написан на TypeScript. Обязательно используйте правильные типы для ваших компонентов и функций. Файл `tsconfig.json` содержит конфигурацию TypeScript.

## Тестирование

В проекте используется Jest и Testing Library для тестирования. Чтобы запустить тесты, используйте следующую команду:

```bash
npm test
```

Вы можете писать тесты в файлах с расширением `.test.tsx` и размещать их рядом с компонентами, которые они тестируют.

## Сборка

Для сборки проекта для продакшена используйте следующую команду:

```bash
npm run build
```

Эта команда создаст оптимизированную сборку в директории `build/`.

## Внесение изменений

Для внесения изменений в проект следуйте этим шагам:

1. Форкните репозиторий.
2. Создайте новую ветку (`git checkout -b feature-branch`).
3. Внесите свои изменения.
4. Зафиксируйте изменения (`git commit -m 'Add some feature'`).
5. Отправьте изменения в удаленный репозиторий (`git push origin feature-branch`).
6. Создайте pull request.

## Оформление кода

Для обеспечения единообразия кода и облегчения его чтения и сопровождения, пожалуйста, следуйте следующим правилам оформления кода:

1. **Имена переменных и функций:**
   - Используйте camelCase для имен переменных и функций.
   - Пример: `const myVariable = 10;`, `function doSomething() {}`.

2. **Имена компонентов:**
   - Используйте PascalCase для имен компонентов.
   - Пример: `const MyComponent: React.FC = () => {};`.

3. **Структура файлов:**
   - Один файл должен содержать один компонент.
   - Компоненты должны быть расположены в папке `components`.

4. **Использование комментариев:**
   - Используйте комментарии для пояснения сложных участков кода.
   - Пример:
     ```javascript
     // Этот компонент отвечает за отображение заголовка
     const Header: React.FC = () => {
       return <h1>Заголовок</h1>;
     };
     ```

5. **Форматирование кода:**
   - Используйте отступы в 1 tab.
   - Следуйте рекомендациям по форматированию от ESLint и Prettier (если они настроены).

6. **Типизация:**
   - Всегда указывайте типы для переменных и функций в TypeScript.
   - Пример:
     ```typescript
     const myFunction = (param: string): number => {
       return param.length;
     };
     ```

7. **Tailwind CSS:**
   - Используйте классы Tailwind CSS для стилизации компонентов.
   - Избегайте использования встроенных стилей (inline styles).

---
