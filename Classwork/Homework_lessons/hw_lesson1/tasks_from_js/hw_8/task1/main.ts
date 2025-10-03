class Course {
    title: string;
    monthDuration: number;

    constructor(title: string, monthDuration: number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}
class Course2 extends Course{
id: number;

    constructor(title: string, monthDuration: number, id: number) {
        super(title, monthDuration);
        this.id = id;
    }
}

const coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map<Course2>((course: Course, index: number) => ({...course, id: index + 1})));
