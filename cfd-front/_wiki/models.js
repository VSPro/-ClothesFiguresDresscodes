/**
 * Есть две основные сущности, которые отбираются по заданным настройкам фильтров:
 * товары (одежда, аксессуары и пр.), фотографии моделей.
 * 
 * 
 */

const user = {   // Сведения о пользователе, появляющиеся в системе после обработки введённых им данных
    sizes: {   
        chest: 'xs',    // Размеры обхватов и роста мужчин и женщин определяются в одной шкале, также как определяются размеры обуви
        waist: 'xs',        
        hips: 'xs',
        height: 'xs',
        shoes: '23'
    },
    appearance: {
        sex: 1,     //  Значений два: 1 - "м", 0 - "ж",
        shape: '1A',   
        ageInterval: '',   // Буквенное обозначение возростного диапазона. TODO: сделать шкалу возростных диапазонов.
        legsCurvature: null,    // Параметр кривизны ног. Доступно три значения: 1 - выгнутые, -1 - вогнутые, null - нормальные.
        postureCurvature: null,     // Параметр кривизны осанки. Доступно три значения: 1 - выгнутые, -1 - вогнутые, null - нормальные.
        skinColor: '',      // Строка с обозначением цвета кожм из шкалы. TODO: Зделать шкалу цветоа.
        hairColor: '',      // Строка с обозначением цвета волос из шкалы.
    }
}

const clothes = {   // Объект товара
    sizes: {    // У разных товаров в объекте "sizes" будет разный набор полей. Здесь приведены все возможные поля
        chest: 'xs',    // Размеры обхватов и роста мужчин и женщин определяются в одной шкале, также как определяются размеры обуви
        waist: 'xs',        
        hips: 'xs',
        height: 'xs',
        shoes: '23'
    },
    forWhom: {
        sex: 1,     //  Значений три: 1 - "м", 0 - "ж", -1 (или null) - унисекс
        shapes: ['1A', '2B'],   // Массив с перечислением типов фигур, которым подходит товар. Может быть пустым, означает, что подходит всеи типам фигур
        ageIntervals: [],   // Массив с буквенными обозначениями возростного диапазона. Может быть пустым. TODO: сделать шкалу возростных диапазонов.
        legsCurvature: null,    // Параметр кривизны ног. Доступно три значения: 1 - выгнутые, -1 - вогнутые, null - нормальные.
        postureCurvature: null,     // Параметр кривизны осанки. Доступно три значения: 1 - выгнутые, -1 - вогнутые, null - нормальные.
        сolor: '',      // Берётся цвет из шкалы, наиболее близкий к основному отенноку одежды. TODO: Зделать шкалу цветоа.
        importance: 2,      // Числовой индекс, необходимый при подборе цветов одежды
    },
    clothesAppearance: {
        classification: [   //  Здесь указывается место одежды в фильтрах. В каждом подмассиве описывается последовательно значения в трёх фильтрах. 
            ['business', 'outerwear', 1],   // Первый пункт - дресс-код, второй - часть наряда, в которой используется вещь (к примеру, верхняя одежда), третий - то, к какой группе принадлежит вещь (руашки или пиджаки и т. д.). Должен быть отдельный файл, сопоставляющий цифры названиям групп
            ['business-casual', 'outerwear', 3]
        ],

        environment: 'winter',
        priseInterval: 'low',
    }
}

const photo = {
    dressCode: 'business-casual',
    shape: '1A',
    sex: 1,
    ageInterval: '',
    skinColor: '',
    hairColor: '',
    legsCurvature: null,    // Включение этого параметра в список под вопросом, так как слишком много придётся искать моделей и делать фотографий
    postureCurvature: null,    // Включение этого параметра в список под вопросом, так как слишком много придётся искать моделей и делать фотографий
    environment: 'winter',
}

/**
 * Сначала пользователь вводит данные о себе. Это ширина плечь, обхваты груди, талии и бёдер, рост, пол, цвета кожи и волос,
 * возраст, размер обуви, кривизна ног и осанки.
 * На основе первых шести параметров определяется тип фигуры.
 * 
 * Далее пользователь переходит к подбору одежды. 
 * Перед ним будет каскад из трёх фильтров. Первый содержит поля: дресс-код, сезон, ценовая категория, основной цвет одежды.
 * Как только он заполнит первый фильтр, он сможет посмотреть фотографии 
 * людей, схожего с его типом фигуры, соотствующего ему возраста, одетого в наряд выбранного дресс-кода, подходящий под
 * выбранный сезон.
 * Каждому пункту первого фильтра соответствуют свои ноборы пунктов фильтров последующих. Они зависимы от первого. Пример ниже.
 */

const filters = {
    business: {
        outerwear: ['Наименования групп. Их порядок соответствует индексам в объекте одежды'],
        apparel,
        Underwear,
        accessories,
        things,
    },
    businessCasual,
    casual,
    ultraCasual,
}
