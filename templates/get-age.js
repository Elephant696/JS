let me = {
    birthDate: { year: 2000, month: 1, day: 14 },
    // getAge() { - аналогично
    getAge: function () {
        let now = new Date();
        let born = new Date(
            this.birthDate.year,
            this.birthDate.month + 1,
            this.birthDate.day,
        );
        let diffInMilliseconds = now.getTime() - born.getTime();
        return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
    }
    // ...другие свойства...
}

console.log(me.getAge());