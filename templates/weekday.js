function printWeekDay() {
    // 0 - вс, 1-пн, ...
    let dayIndex = new Date().getDay();
    let days = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ];

    console.log(`Сегодня ${days[dayIndex]}`);
}

printWeekDay();