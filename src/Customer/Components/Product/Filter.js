
export const color=[
    "whirte",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
        { value: 'white', label: 'White' },
        { value: 'beige', label: 'Beige' },
        { value: 'blue', label: 'Blue' },
        { value: 'brown', label: 'Brown' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
        ],
    },

    {
        id: 'size',
        name: 'Size',
        options: [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' }
        ],
    },
    ]

    const subCategories = [
        { name: 'Totes', href: '#' },
        { name: 'Backpacks', href: '#' },
        { name: 'Travel Bags', href: '#' },
        { name: 'Hip Bags', href: '#' },
        { name: 'Laptop Sleeves', href: '#' },
      ]
 

    export const singleFilter=[
        {
            id:"price",
            name:"Price",
            options:[
                {value:"159-399", lable:"₹159 to ₹399 "},
                {value:"399-999", lable:"₹399 to ₹999 "},
                {value:"999-1999", lable:"₹999 to ₹1999 "},
                {value:"1999-2999", lable:"₹1999 to ₹2999 "},
                {value:"2999-3999", lable:"₹2999 to ₹3999 "},
            ]
        },
        {
            id:"discount",
            name:"Discount Range",
            options:[
                {value:"10", lable:"10% and Above"},
                {value:"20", lable:"20% and Above"},
                {value:"30", lable:"30% and Above"},
                {value:"40", lable:"40% and Above"},
                {value:"50", lable:"50% and Above"},
                {value:"60", lable:"60% and Above"},
                {value:"70", lable:"70% and Above"},
                {value:"80", lable:"80% and Above"},
            ]
        },
        {
            id:"stock",
            name:"Availability",
            options:[
                {value:"in_stock", lable:"In Stock"},
                {value:"out_of_stock", lable:"Out of Stock"},
            ]
        }
    ]
      