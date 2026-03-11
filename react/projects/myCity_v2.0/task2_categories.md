Вы создаете приложение-путеводитель(Travel Planner), где пользователь может не только просматривать информацию о местах, но и планировать свое посещение. У каждого места есть список задач (TODO), которые можно отметить выполненными.

Настройка маршрутизации:
Главная (/) — приветствие и статистика
Категории мест (/categories) — список категорий (парки, музеи, рестораны)
Избранное (/favorites) — места, которые пользователь добавил в избранное
О приложении (/about) — информация о приложении \*

Категории и места:
На странице категорий выведите список категорий. При клике на категорию открывается страница со списком мест в этой категории:
/categories/:categoryId — места в категории

Используйте useState для:
Хранения данных о категориях и местах
Добавления/удаления мест в избранное
Состояния загрузки (loading)

TODO-лист для каждого места:
На странице конкретного места (/categories/:categoryId/places/:placeId) добавьте TODO-лист:
Просмотр списка задач для этого места
Добавление новой задачи (инпут + кнопка)
Отметка задачи выполненной (чекбокс)
Удаление задачи
Счетчик выполненных/всех задач

Загрузка данных:
Показывайте сообщение "Загрузка..." (используя состояние loading)
Через 1 секунду "загружайте" задачи для этого места (имитация API)
Сохраняйте задачи в состояние

Технические требования:
useState для хранения данных (категории, избранное, задачи, состояние загрузки)
useEffect для имитации загрузки данных
useParams для получения параметров из URL
Link и NavLink для навигации
Navigate для редиректов
Страница 404 для несуществующих маршрутов

// Начальные данные
const initialCategories = [
{
id: 'parks',
name: 'Parks',
icon: '🌳',
places: [
{
id: 'central-park',
name: 'Central Park',
description: 'A large city park for walking, relaxing, and outdoor activities',
image: '🌲',
todos: [] // will be loaded later
},
{
id: 'botanical-garden',
name: 'Botanical Garden',
description: 'A green space with rare plants, walking paths, and quiet areas',
image: '🍃',
todos: []
}
]
},
{
id: 'museums',
name: 'Museums',
icon: '🏛️',
places: [
{
id: 'city-art-museum',
name: 'City Art Museum',
description: 'A major museum with European paintings and modern exhibitions',
image: '🎨',
todos: []
}
]
},
{
id: 'restaurants',
name: 'Restaurants',
icon: '🍽️',
places: [
{
id: 'old-town-bistro',
name: 'Old Town Bistro',
description: 'A cozy restaurant serving traditional European cuisine',
image: '🥐',
todos: []
}
]
}
];

// TODO data (will be "loaded" in useEffect)
const todosData = {
'central-park': [
{ id: 1, text: 'Rent a bicycle', completed: false },
{ id: 2, text: 'Feed the ducks by the lake', completed: true },
{ id: 3, text: 'Visit the open-air café', completed: false }
],
'botanical-garden': [
{ id: 1, text: 'Walk through the rose garden', completed: false },
{ id: 2, text: 'Visit the greenhouse', completed: false }
],
'city-art-museum': [
{ id: 1, text: 'See the Impressionist collection', completed: false },
{ id: 2, text: 'Buy souvenirs', completed: true }
],
'old-town-bistro': [
{ id: 1, text: 'Try the seasonal soup', completed: false },
{ id: 2, text: 'Reserve a table', completed: true },
{ id: 3, text: 'Leave a tip', completed: false }
]
};

Что должно работать:

Навигация по категориям:
Клик по категории → список мест
Клик по месту → страница места с TODO-листом

Избранное:
На странице места есть кнопка "Добавить в избранное / Удалить из избранного"
На странице /favorites отображаются все избранные места
Состояние избранного хранится в useState

TODO-лист:
Добавление задач (инпут + Enter или кнопка)
Чекбоксы для отметки выполнения
Кнопка удаления задачи
Прогресс-бар выполнения задач

Загрузка данных:
При переходе на страницу места показывается "Загрузка задач..."
Через 1 секунду задачи появляются
При смене места старые задачи очищаются, загружаются новые

Счетчики на главной:
Общее количество мест
Количество избранных мест
Количество выполненных задач (по всем местам)

Дополнительные задания\*\*\*
Сохранение в localStorage:
Сохраняйте задачи и избранное в localStorage
При загрузке страницы восстанавливайте данные

Сортировка задач:
Добавьте кнопки "Сначала активные" / "Сначала выполненные"

Поиск:
Добавьте поиск по задачам на странице места

Статистика:
На главной добавьте круговую диаграмму выполнения задач (можно использовать CSS)
