export let projectList = [
    // {name: '', deployed: true/false, collaborative: true/false, bootcamp: false, focus: '', repo: '', link: '', img: ''},
    // personal projects
    {name: 'OData Student API', deployed: false, collaborative: false, bootcamp: false, focus: 'OData', repo: 'https://github.com/TOVTC/csharp-hassan-odata-tutorial', img: 'odata-tutorial'},
    {name: 'Identity Server Tracker', deployed: false, collaborative: false, bootcamp: false, focus: 'Identity Server 4', repo: 'https://github.com/TOVTC/csharp-identityserver4-employee-tracker', img: 'identity-server-employee-tracker'},
    {name: 'Nest Account API', deployed: false, collaborative: false, bootcamp: false, focus: 'Nest', repo: 'https://github.com/TOVTC/vlad-nestjs-tutorial', img: 'nestjs-tutorial'},
    {name: 'Flutter Movie Lookup', deployed: false, collaborative: false, bootcamp: false, focus: 'Flutter, iOS/Android OS, Localizations', repo: 'https://github.com/TOVTC/flutter-dart-movie-lookup', img: 'flutter-movie-lookup'},
    {name: 'Vuetify 3 Movie Lookup', deployed: true, collaborative: false, bootcamp: false, focus: 'Vuetify 3', repo: 'https://github.com/TOVTC/vuetify3-movie-lookup', link: 'https://vuetify-movie-lookup.onrender.com/', img: 'vuetify3-movie-lookup'},
    {name: 'Vuetify 2 Movie Lookup', deployed: true, collaborative: false, bootcamp: false, focus: 'Vuetify 2', repo: 'https://github.com/TOVTC/vuetify2-movie-lookup', link: 'https://tovtc.github.io/vuetify2-movie-lookup/', img: 'vuetify2-movie-lookup'},
    {name: 'Docker To Do List', deployed: false, collaborative: false, bootcamp: false, focus: 'Docker', repo: 'https://github.com/TOVTC/docker-todo-tutorial', img: 'docker-to-do'},
    {name: 'To Do List API', deployed: false, collaborative: false, bootcamp: false, focus: 'C#, .NET Core, Entity', repo: 'https://github.com/TOVTC/csharp-dotnet-todo-api-tutorial', img: 'to-do'},
    {name: 'Vue 3 Movie Lookup', deployed: true, collaborative: false, bootcamp: false, focus: 'Vue 3', repo: 'https://github.com/TOVTC/vue3-movie-lookup', link: 'https://vue-3-movie-lookup.onrender.com/', img: 'movie-lookup-3'},
    {name: 'Vue 2 Movie Lookup', deployed: true, collaborative: false, bootcamp: false, focus: 'Vue 2', repo: 'https://github.com/TOVTC/vue2-movie-lookup', link: 'https://tovtc.github.io/vue2-movie-lookup/', img: 'movie-lookup-2'},
    {name: 'Connect Four', deployed: false, collaborative: false, bootcamp: false, focus: 'OOP, Algorithms', repo: 'https://github.com/TOVTC/connect-four', img: 'connect-four'},
    {name: 'CatWorx Badge Generator', deployed: false, collaborative: false, bootcamp: false, focus: 'C#, .NET Core', repo: 'https://github.com/TOVTC/csharp-.net-CatWorx', img: 'csharp-catworx'},
    {name: 'Just Tech News', deployed: true, collaborative: false, bootcamp: false, focus: 'Java Full Stack MVC', repo: 'https://github.com/TOVTC/tech-news-java-api', link: 'https://cc-java-api-777.herokuapp.com/', img: 'java-tech-news'},
    {name: 'Java Employee Tracker', deployed: false, collaborative: false, bootcamp: false, focus: 'Java, Spring Boot API', repo: 'https://github.com/TOVTC/java-spring-employee-api', img: 'java-employee-api'},
    // bootcamp challenges
    {name: 'Locum', deployed: true, collaborative: true, bootcamp: true, focus: 'Full Stack React SPA', repo: 'https://github.com/TOVTC/Locum-project-three', link: 'https://locum-staffing.herokuapp.com/', img: 'locum'},
    {name: 'React Portfolio', deployed: true, collaborative: false, bootcamp: true, focus: 'React SPA', repo: 'https://github.com/TOVTC/react-portfolio-scscbc-challenge', link: 'https://tovtc.github.io/react-portfolio-scscbc-challenge/', img: 'react-portfolio'},
    {name: 'Budget Tracker', deployed: true, collaborative: false, bootcamp: true, focus: 'Progressive Web Applications', repo: 'https://github.com/TOVTC/budget-tracker-scscbc-challenge', link: 'https://gorgeous-canyonlands-37122.herokuapp.com/', img: 'budget-tracker'},
    {name: 'Social Network API', deployed: false, collaborative: false, bootcamp: true, focus: 'NoSQL', repo: 'https://github.com/TOVTC/social-network-challenge-scscbc', img: 'social-network-api'},
    {name: 'Fermata', deployed: true, collaborative: true, bootcamp: true, focus: 'Full Stack MVC', repo: 'https://github.com/TOVTC/Fermata-project-two', link: 'https://experience-fermata.herokuapp.com/home', img: 'fermata'},
    {name: 'E-Commerce Backend', deployed: false, collaborative: false, bootcamp: true, focus: 'Object Relational Mapping', repo: 'https://github.com/TOVTC/e-commerce-backend-scscbc-challenge', img: 'e-commerce'},
    {name: 'Employee Tracker', deployed: false, collaborative: false, bootcamp: true, focus: 'MySQL', repo: 'https://github.com/TOVTC/employee-tracker-scscbc-challenge', img: 'employee-tracker'},
    {name: 'Note Taker', deployed: true, collaborative: false, bootcamp: true, focus: 'Express Server', repo: 'https://github.com/TOVTC/note-taker-scscbc-challenge', link: 'https://stark-sea-34689.herokuapp.com/', img: 'note-taker'},
    {name: 'Team Profile Generator', deployed: false, collaborative: false, bootcamp: true, focus: 'Object Oriented Programming', repo: 'https://github.com/TOVTC/team-profile-generator-scscbc-challenge', img: 'team-generator'},
    {name: 'README Generator', deployed: false, collaborative: false, bootcamp: true, focus: 'Node', repo: 'https://github.com/TOVTC/readme-generator-scscbc-challenge', img: 'readme-generator'},
    {name: 'WeathCon', deployed: true, collaborative: true, bootcamp: true, focus: 'Interactive Frontend', repo: 'https://github.com/TOVTC/WeathCon-project-one', link: 'https://scscbc-projects2022.github.io/WeathCon-project-one/', img: 'weathcon'},
    {name: 'Weather Dashboard', deployed: true, collaborative: false, bootcamp: true, focus: 'Server-Side APIs', repo: 'https://github.com/TOVTC/weather-dashboard-scscbc-challenge', link: 'https://tovtc.github.io/weather-dashboard-scscbc-challenge/', img: 'weather-dashboard'},
    {name: 'Workday Scheduler', deployed: true, collaborative: false, bootcamp: true, focus: 'Third-Party APIs', repo: 'https://github.com/TOVTC/scheduler-scscbc-challenge', link: 'https://tovtc.github.io/scheduler-scscbc-challenge/', img: 'scheduler'},
    {name: 'Code Quiz', deployed: true, collaborative: false, bootcamp: true, focus: 'Web APIs', repo: 'https://github.com/TOVTC/code-quiz-scscbc-challenge', link: 'https://tovtc.github.io/code-quiz-scscbc-challenge/', img: 'coding-quiz'},
    {name: 'Password Generator', deployed: true, collaborative: false, bootcamp: true, focus: 'JavaScript', repo: 'https://github.com/TOVTC/password-generator-scscbc-challenge', link: 'https://tovtc.github.io/password-generator-scscbc-challenge/', img: 'password-generator'},
    {name: 'Personal Portfolio', deployed: true, collaborative: false, bootcamp: true, focus: 'CSS Flexbox', repo: 'https://github.com/TOVTC/portfolio-scscbc-challenge', link: 'https://tovtc.github.io/portfolio-scscbc-challenge/', img: 'portfolio'},
    {name: 'Horiseon', deployed: true, collaborative: false, bootcamp: true, focus: 'Accessible Code Refactor', repo: 'https://github.com/TOVTC/horiseon-scscbc-challenge', link: 'https://tovtc.github.io/horiseon-scscbc-challenge/', img: 'horiseon'},
]