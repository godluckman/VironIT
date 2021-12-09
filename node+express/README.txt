1. Создать пользователя: 
метод POST,
запрос http://localhost:*PORT*/user/create || http://localhost:*PORT*/users/create
BODY raw json
Пример:
{
    "firstName": "Ivan",
    "login": "mylog",
    "password": "mypass1212"
}
................................................................
2. Получить всех пользователей:
метод GET,
запрос http://localhost:*PORT*/user/get, 
BODY none
................................................................
3. Удалить пользователя: 
метод DELETE,
запрос http://localhost:*PORT*/user/delete, 
BODY raw json
Пример:
{
    "firstName": "Ira"
}
................................................................
4. Добавить задачу в список:
метод POST,
запрос http://localhost:*PORT*/list/create, 
BODY raw json
Пример:
{
    "task": "Do my homework",
    "UserId": "1"
}
................................................................
5. Получить список задач для конкретного пользователя:
метод GET,
запрос http://localhost:*PORT*/list?id=1, 
BODY none



