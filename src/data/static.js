import Login from "../components/Login";

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
    { name: 'Home', link: '/home' },
    { name: 'News', link: '/news' },
    { name: 'Teams', link: '/teams' },
    { name: 'Fixtures', link: '/fixtures' ,submenu: [{name: "Create Fixtures",link: '/createFixtures' },{name: "List Fixtures",link: '/listFixtures' }]},
    { name: 'Results', link: '/results' },
    { name: 'Players', link: '/players' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Shop', link: '/shop' },
    { name: 'Tickets', link: '/tickets' },
    { name: 'Live Scores', link: '/live-scores' },
    { name: 'Fan Zone', link: '/fan-zone' },
    { name: 'Configuration', link: '/configuration' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
];

export const ACTUAL_IMAGS = {
    BOXING: '/images/boxing.jpg',
    FOOTBAL: '/imags/football.png'
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
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "01",
        smallImage: "/image/index.jpg",
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }, {
        id: "02",
        smallImage: '../../public/images/index.jpg',
        largeImage: "/image/index.jpg",
        name: "Water bottel",
        Description: "A water bottle is a portable container designed to hold and carry water or other beverages",
        price: "20",
        quantity: "1",
        offer: "DYN0199"
    }
]

export const COMPANY = {
    name: "Dynamcis 101 MMA"
}

export const SAMPLE_MSG =[
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

export const SAMPLE_MSG1 = [
    ["21vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vij2ayakumar", 22,1234242,"viv2gmailcom."],
    ["vija3yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijay4akumar", 22,1234242,"viv2gmailcom."],
    ["vijay2akumar", 22,1234242,"viv2gmailcom."],
    ["3vijaydakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["vijasyakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijasyaksumar", 22,1234242,"viv2gmailcom."],
    ["2visjayakumar", 22,1234242,"viv2gmailcom."],
    ["vijeayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vija5yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaskumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["5vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],  ["21vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vij2ayakumar", 22,1234242,"viv2gmailcom."],
    ["vija3yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijay4akumar", 22,1234242,"viv2gmailcom."],
    ["vijay2akumar", 22,1234242,"viv2gmailcom."],
    ["3vijaydakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["vijasyakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijasyaksumar", 22,1234242,"viv2gmailcom."],
    ["2visjayakumar", 22,1234242,"viv2gmailcom."],
    ["vijeayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vija5yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaskumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["5vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],  ["21vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vij2ayakumar", 22,1234242,"viv2gmailcom."],
    ["vija3yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijay4akumar", 22,1234242,"viv2gmailcom."],
    ["vijay2akumar", 22,1234242,"viv2gmailcom."],
    ["3vijaydakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["vijasyakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijasyaksumar", 22,1234242,"viv2gmailcom."],
    ["2visjayakumar", 22,1234242,"viv2gmailcom."],
    ["vijeayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vija5yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaskumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["5vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],  ["21vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vij2ayakumar", 22,1234242,"viv2gmailcom."],
    ["vija3yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijay4akumar", 22,1234242,"viv2gmailcom."],
    ["vijay2akumar", 22,1234242,"viv2gmailcom."],
    ["3vijaydakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["vijasyakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijasyaksumar", 22,1234242,"viv2gmailcom."],
    ["2visjayakumar", 22,1234242,"viv2gmailcom."],
    ["vijeayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vija5yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaskumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["5vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],  ["21vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vij2ayakumar", 22,1234242,"viv2gmailcom."],
    ["vija3yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijay4akumar", 22,1234242,"viv2gmailcom."],
    ["vijay2akumar", 22,1234242,"viv2gmailcom."],
    ["3vijaydakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["vijasyakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaksumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijasyaksumar", 22,1234242,"viv2gmailcom."],
    ["2visjayakumar", 22,1234242,"viv2gmailcom."],
    ["vijeayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vija5yakumar", 22,1234242,"viv2gmailcom."],
    ["vijayaskumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["5vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["2vijayakumar", 22,1234242,"viv2gmailcom."],
    ["4vijayakumar", 22,1234242,"viv2gmailcom."],
    ["dvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."],
    ["fvijayakumar", 22,1234242,"viv2gmailcom."],
    ["vijayakumar", 22,1234242,"viv2gmailcom."]
]

//Table constants
export  const TABLE_SIZE = 10



export const CREATE_FIXTURES = [
    {
        name: "First Name",
        type: "text",
        id: "firstName",
        placeholder: "Please Enter First name",
    },  {
        name: "Last Name",
        type: "text",
        id: "lastName",
        placeholder: "Please Enter Last name",
    },  {
        name: "Email",
        type: "text",
        id: "email",
        placeholder: "Please Enter Email name",
    },  {
        name: "Phone Number",
        type: "number",
        id: "phoneNumber",
        placeholder: "Please Enter Phone Number",
    },{
        name: "Gender",
        type: "radio",
        id: "gender",
        value: "Female"
    },{
        name: "Gender",
        type: "radio",
        id: "gender",
        value: "Male"
    },{
        name: "Are you sure",
        type: "checkbox",
        id: "campaignPublish",
        value: "M"
    },{
        name: "Are you sure",
        type: "checkbox",
        id: "campaignPublish",
        value: "M"
    },{
        name: "Are you sure",
        type: "checkbox",
        id: "campaignPublish",
        value: "M"
    },{
        name: "Are you sure",
        type: "checkbox",
        id: "campaignPublish",
        value: "M"
    },  {
        name: "Email",
        type: "text",
        id: "email",
        placeholder: "Please Enter Email name",
    },  {
        name: "Email",
        type: "text",
        id: "email",
        placeholder: "Please Enter Email name",
    },  {
        name: "Email",
        type: "text",
        id: "email",
        placeholder: "Please Enter Email name",
    }
]