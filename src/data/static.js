import Dashboard from "../business/Dashboard";

export const LOGIN_FIELDS = [
    {
        name: "Username",
        type: "email",
        id: "email01",
        placeholder: "Please Enter Username",
    }, {
        name: "Password",
        type: "password",
        id: "password",
        placeholder: "Please Enter Password",
    }
]
export const MENU_ITEMS = [
    { name: 'Dashboard', link: '/dashboard', icon: 'bi bi-justify' },
    {
        name: 'Manage Teams', link: '/fan-zone', submenu: [{
            name: 'Create Team', link: '/createTeam'
        }]
    },
    { name: 'Manage Players', link: '/managePlayers' },
    { name: 'Schedules', link: '/about' },
    { name: 'Reports', link: '/contact' },
    { name: 'Settings', link: '/settings' },
    { name: 'Announcements ', link: '/contact' },
    { name: 'Feedback & Support', link: '/contact' },
];

export const SUB_MENUS = {
    "/dashboard": [
        { name: 'Manage Players', link: '/configuration' },
        { name: 'Schedules', link: '/about' },
        {
            name: 'Manage Teams', link: '/fan-zone', submenu: [{
                name: 'Create Team', link: '/createTeam'
            }]
        }
    ]
}

export const PAGE_FOOTER_MSG = "Copyright reservered @Dynamcis 101mma"

export const CONFIGURATION_QUESTIONS = [
    {
        name: "Brand Name",
        type: "text",
        id: "email01",
        placeholder: "Please Enter Brand Name",
    }, {
        name: "Brand Image",
        type: "text",
        id: "email01",
        placeholder: "Please Enter Brand Name",
    }
]

export const PRODUCTS = [
    {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }
]

export const COMPANY = {
    name: "Dynamcis 101 MMA",
    description: "Dynamcis 101 MMA helps you connect and share with the people in your skills"
}

export const SAMPLE_MSG = [
    ["John Doe", "Software Engineer", "New York", "john.doe@example.com"],
    ["Jane Smith", "Product Manager", "San Francisco", "jane.smith@example.com"],
    ["Alice Johnson", "Data Analyst", "Seattle", "alice.johnson@example.com"],
    ["Bob Brown", "UX Designer", "Boston", "bob.brown@example.com"],
    ["Charlie Davis", "DevOps Engineer", "Austin", "charlie.davis@example.com"],
    ["Diana Miller", "QA Engineer", "Denver", "diana.miller@example.com"],
    ["Ethan Wilson", "Backend Developer", "Chicago", "ethan.wilson@example.com"],
    ["Fiona Moore", "Frontend Developer", "Los Angeles", "fiona.moore@example.com"],
    ["George Harris", "Project Manager", "Phoenix", "george.harris@example.com"],
    ["Hannah Clark", "Business Analyst", "Miami", "hannah.clark@example.com"]
]


//Table constants
export const TABLE_SIZE = 10



//chart options
export const CHART_DATA = {
    label: "testing",
    labels: ["Jan", "Feb", "March", "April"],
    title: "Monthly sales report",
    records: [1, 2, 3, 45, 33]
}

export const CHART_COLOR = "rgb(219, 17, 17)"
export const CHART_BORDER_COLOR = "rgb(219, 17, 17)"

export const ACCORDION_FIEDS = [
    {
        header: "testing",
        body: "body testing"
    }, {
        header: "testing",
        body: "body testing"
    }, {
        header: "testing",
        body: "body testing"
    }, {
        header: "testing",
        body: "body testing"
    }
]


//Registration
export const REGISTRATION = [
    {
        name: "First Name",
        type: "text",
        id: "firstName",
        required: true,
        placeholder: "Please Enter First name",
    }, {
        name: "Last Name",
        type: "text",
        id: "lastName",
        required: true,
        placeholder: "Please Enter Last name",
    }, {
        name: "Gender",
        type: "radio",
        required: true,
        id: "gender",
        value: "Male",
        placeholder: "Please Select Gender",
    }, {
        name: "Gender",
        type: "radio",
        required: true,
        id: "gender",
        value: "Female",
        placeholder: "Please Select Gender",
    }, {
        name: "Mobile/Email",
        type: "text",
        required: true,
        id: "mobile",
        placeholder: "Please Enter Mobile/Email",
    }, {
        name: "Password",
        type: "password",
        required: true,
        id: "password",
        placeholder: "Please Select Password",
    }, {
        name: "I am a ",
        type: "radio",
        required: true,
        id: "personType",
        value: "Coach",
        placeholder: "Please Select Type",
    }, {
        name: "I am a ",
        type: "radio",
        required: true,
        id: "personType",
        value: "Student",
        placeholder: "Please Select Type",
    }, {
        name: "I am a ",
        type: "radio",
        required: true,
        id: "personType",
        value: "Merchanidizer",
        placeholder: "Please Select Type",
    },
]


//Sample person display
export const PERSON = [
    {
        name: "First Name",
        type: "label",
        id: "firstName",
        required: true,
        value: "Vijayakumar",
        placeholder: "Please Enter First name",
    }, {
        name: "Last Name",
        type: "label",
        id: "lastName",
        required: true,
        value: "M",
        placeholder: "Please Enter Last name",
    }, {
        name: "Gender",
        type: "label",
        required: true,
        id: "gender",
        value: "Male",
        placeholder: "Please Select Gender",
    }, {
        name: "Mobile/Email",
        type: "label",
        required: true,
        value: 928343993,
        id: "mobile",
        placeholder: "Please Enter Mobile/Email",
    },
]

export const CREATE_TEAM = [
    {
        name: "Team Name",
        type: "text",
        id: "teamName",
        required: true,
        placeholder: "Please Enter Team name",
    }, {
        name: "Team Members",
        type: "autocomplete",
        id: "teamName",
        required: true,
        values: ["vijayakumar","javan","mahesh","kathir"],
        placeholder: "Please Enter Team name",
    },
]


export const SEARCH_TEAM = [
    {
        name: "Team Name",
        type: "autocomplete",
        id: "teamName",
        required: true,
        values: ["vijayakumar","javan","mahesh","kathir"],
        placeholder: "Please Enter Team name",
    }
]