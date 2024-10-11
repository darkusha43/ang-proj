import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestDate{
     
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учеба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'},
    ]




    static priorities: Priority[] = [
        {id: 1, title: 'Работа', color: 'e5e5e5'},
        {id: 1, title: 'Работа', color: '85D1B2'},
        {id: 3, title: 'Работа', color: 'f1828D'},
        {id: 4, title: 'Работа', color: '#F1128D'},


    ]


    static tasks: Task[] = [
        {

            id: 1,
            title: 'Залить бензин полный бак',
            priority: TestDate.priorities[2],
            complited: false,
            categoty: TestDate.categories[9],
            date: new Date()

        },
        {

            id: 2,
            title: 'Постирать кита',
            priority: TestDate.priorities[1],
            complited: false,
            categoty: TestDate.categories[8],
            date: new Date()

        },
        {

            id: 3,
            title: 'Слить воду с батарей',
            priority: TestDate.priorities[0],
            complited: false,
            categoty: TestDate.categories[7],
            date: new Date()

        },
        {

            id: 4,
            title: 'Наши общие снимки',
            priority: TestDate.priorities[0],
            complited: false,
            categoty: TestDate.categories[6],
            date: new Date()

        },
        {

            id: 5,
            title: 'Хочешь удали',
            priority: TestDate.priorities[1],
            complited: false,
            categoty: TestDate.categories[5],
            date: new Date()

        },
        {

            id: 6,
            title: 'Хочешь сохрони',
            priority: TestDate.priorities[2],
            complited: false,
            categoty: TestDate.categories[4],
            date: new Date()

        },
        {

            id: 7,
            title: 'Мы с тобой',
            priority: TestDate.priorities[2],
            complited: false,
            categoty: TestDate.categories[3],
            date: new Date()

        },
        {

            id: 8,
            title: 'Не картинки',
            priority: TestDate.priorities[3],
            complited: false,
            categoty: TestDate.categories[3],
            date: new Date()

        },
        {

            id: 9,
            title: 'Все ровно болит',
            priority: TestDate.priorities[2],
            complited: false,
            categoty: TestDate.categories[2],
            date: new Date()

        },
        {

            id: 10,
            title: 'Лучше не звони',
            priority: TestDate.priorities[1],
            complited: false,
            categoty: TestDate.categories[1],
            date: new Date()

        },
        {

            id: 11,
            title: 'Как звезды',
            priority: TestDate.priorities[1],
            complited: false,
            categoty: TestDate.categories[5],
            date: new Date()

        },
        {

            id: 12,
            title: 'Рвуться письма',
            priority: TestDate.priorities[1],
            complited: false,
            categoty: TestDate.categories[3],
            date: new Date()

        },
        {

            id: 13,
            title: 'Впереди зима',
            priority: TestDate.priorities[7],
            complited: false,
            categoty: TestDate.categories[9],
            date: new Date()

        },
        {

            id: 14,
            title: 'Пять секунд что б сделать шаг',
            priority: TestDate.priorities[6],
            complited: false,
            categoty: TestDate.categories[8],
            date: new Date()

        },
        {

            id: 15,
            title: 'На самом одиноком корабле',
            priority: TestDate.priorities[5],
            complited: false,
            categoty: TestDate.categories[7],
            date: new Date()

        },
        {

            id: 16,
            title: 'Я приду к тебе',
            priority: TestDate.priorities[7],
            complited: false,
            categoty: TestDate.categories[7],
            date: new Date()

        },
        {

            id: 17,
            title: 'С клубникой в декабре',
            priority: TestDate.priorities[6],
            complited: false,
            categoty: TestDate.categories[6],
            date: new Date()

        },
        {

            id: 18,
            title: 'Банка пива БАД',
            priority: TestDate.priorities[5],
            complited: false,
            categoty: TestDate.categories[5],
            date: new Date()

        },
        {

            id: 19,
            title: 'Хоку на прощанье',
            priority: TestDate.priorities[4],
            complited: false,
            categoty: TestDate.categories[4],
            date: new Date()

        },
        {

            id: 20,
            title: 'Совсем от рук отбились',
            priority: TestDate.priorities[3],
            complited: false,
            categoty: TestDate.categories[0],
            date: new Date()

        },
    ]
}