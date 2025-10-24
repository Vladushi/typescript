type Course9 = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}

const coursesArray: Course9[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {

    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('title');
    titleBlock.innerText = course.title;

    const monthBlock = document.createElement('div');
    monthBlock.classList.add('monthDuration');
    monthBlock.innerText = `Month duration: ${course.monthDuration}`;

    const hourBlock = document.createElement('div');
    hourBlock.classList.add('hourDuration');
    hourBlock.innerText = `Hour duration: ${course.hourDuration}`;

    const modulesBlock = document.createElement('div');
    modulesBlock.classList.add('modules');

    const ul = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    modulesBlock.appendChild(ul);
    courseBlock.append(titleBlock, monthBlock, hourBlock, modulesBlock);

    document.body.appendChild(courseBlock);
}
