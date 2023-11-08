import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Golf",
    type: "Sports",
    items: 10,
    change: "1999$",
  },
  {
    name: "Programming",
    type: "Software",
    items: "12",
    change: "72$"
  },
  {
    name: "Office Collaboration",
    type: "Teamwork",
    items: 7,
    change: "70$"
  },
  {
    name: "AI/ML",
    type: "Artificial Intelligence",
    items: 21,
    change: "15$"
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
       
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Jai',
      lastName: 'Krithick',
    },
    address: 'Freddy Fazbear 123',
    city: 'Strange Island',
    state: 'Ohio',
  },
  
]