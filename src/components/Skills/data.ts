const NET = {
    labels: ['C#', 'ASP.NET Core', 'Entity Framework Core'],
    datasets: [
        {
            data: [10, 10, 10],
            backgroundColor: ['#95468e', '#7d2e80', '#671473'],
            borderWidth: 0,
        },
    ],
};

const FRONT = {
    labels: ['HTML', 'JavaScript', 'Vue', 'TypeScript', 'CSS', 'React', 'Angular'],
    datasets: [
        {
            data: [5, 8, 9, 9, 6, 8, 5],
            backgroundColor: ['#32E0C4', '#2dd9bc', '#1ec0a5', '#16aa91', '#139c85', '#0f8b76', '#0e7e6c'],
            borderWidth: 0,
        },
    ],
};


const SQL = {
    labels: ['PostgreSQL', 'MSSQL'],
    datasets: [
        {
            data: [8, 8],
            backgroundColor: ['#32E0C4', '#0e7e6c'],
            borderWidth: 0,
        },
    ],
};

const OTHER = {
    labels: ['Rust'],
    datasets: [
        {
            data: [7],
            backgroundColor: '#393E46',
            borderWidth: 0,
        },
    ],
};

export default {
    NET, FRONT, SQL, OTHER
};