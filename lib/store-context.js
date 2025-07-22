"use client"

import { createContext, useContext, useState, useEffect } from "react"

const StoreContext = createContext()

export function StoreProvider({ children }) {
  // Initialize state from localStorage or fall back to default values
  const [categories, setCategories] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCategories = localStorage.getItem('categories')
      return savedCategories ? JSON.parse(savedCategories) : [
        {
            "name": "Smart Lights",
            "slug": "smart-lights",
            "description": "Intelligent lighting solutions for the modern home",
            "heroImage": "https://m.media-amazon.com/images/I/615pVwt1rNL._AC_UF1000,1000_QL80_FMwebp_.jpg",
            "count": 24
        },
        {
            "name": "Smiley Lights",
            "slug": "smiley-lights",
            "description": "Elegant ceiling fixtures for every room",
            "heroImage": "https://m.media-amazon.com/images/I/51TzpXs08fL._SX522_.jpg",
            "count": 18
        },
        {
            "name": "Devine Series",
            "slug": "devine-series",
            "description": "Stylish wall-mounted lighting options",
            "heroImage": "https://m.media-amazon.com/images/I/71OPmZ0JuIL._SX679_.jpg",
            "count": 12
        },
        {
            "name": "Others",
            "slug": "others",
            "description": "Durable and attractive outdoor lighting solutions",
            "heroImage": "https://m.media-amazon.com/images/I/613irfk32-L._SX466_.jpg",
            "count": 16
        }
    ]
    }
    return []
  })

  const [products, setProducts] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products')
      return savedProducts ? JSON.parse(savedProducts) : [
        {
            "id": "1",
            "uniqueId": "HOARD-001",
            "name": "HOARD Plastic 0.5W Led Night Lamp With Smiley (Kitty), Multicolored",
            "description": "HOARD Plastic 0.5W Led Night Lamp With Smiley (Kitty), Multicolored",
            "price": 255,
            "image": [
                "https://m.media-amazon.com/images/I/613irfk32-L._SX466_.jpg",
                "https://m.media-amazon.com/images/I/81WCfe7oCXL._SX342_.jpg",
                "https://m.media-amazon.com/images/I/51m+1Rp+aLL._SX342_.jpg",
                "https://m.media-amazon.com/images/I/718wBLnxHsL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61gb89-XNsL._SL1500_.jpg"
            ],
            "category": "others",
            "featured": false
        },
        {
            "id": "2",
            "uniqueId": "HOARD-002",
            "name": "HOARD 0.5W Led Plug in Smart Night Lamp with Automatic Sensor Smart Led Night Lamp -(Warm White) Pack of 1(Polycarbonate)",
            "description": "HOARD 0.5W Led Plug in Smart Night Lamp with Automatic Sensor Smart Led Night Lamp -(Warm White) Pack of 1(Polycarbonate)",
            "price": 270,
            "image": [
                "https://m.media-amazon.com/images/I/615pVwt1rNL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/41sbK9PjlTL._SL1080_.jpg",
                "https://m.media-amazon.com/images/I/51OkxkYkWYL._SL1280_.jpg",
                "https://m.media-amazon.com/images/I/51oQN3cjAnL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },
        {
            "id": "3",
            "uniqueId": "HOARD-003",
            "name": "HOARD 0.5W Led Plug in Smart Night Lamp with, Automatic Sensor -(Blue) Pack of 1",
            "description": "HOARD 0.5W Led Plug in Smart Night Lamp with, Automatic Sensor -(Blue) Pack of 1",
            "price": 270,
            "image": [
                "https://m.media-amazon.com/images/I/515JsucqFtL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51dww4Un67L._SL1156_.jpg",
                "https://m.media-amazon.com/images/I/51LlodVLNdL._SL1156_.jpg",
                "https://m.media-amazon.com/images/I/41uS8t8UNSL._SL1156_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },
        {
            "id": "4",
            "uniqueId": "HOARD-004",
            "name": "HOARD 0.5W Led Plug in Smart Night Lamp with Automatic Sensor Smart LED Night Lamp -(Orange) Pack of 1",
            "description": "HOARD 0.5W Led Plug in Smart Night Lamp with Automatic Sensor Smart LED Night Lamp -(Orange) Pack of 1",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/61swZTW-OIL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81xq88W56NL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71nM8bNxwfL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61TexlOzlFL._SL1500_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },        
        {
            "id": "5",
            "uniqueId": "HOARD-005",
            "name": "HOARD 0.5W Led Plug in Smart Night Lamp with, Automatic Sensor -(Pink) Pack of 1",
            "description": "HOARD 0.5W Led Plug in Smart Night Lamp with, Automatic Sensor -(Pink) Pack of 1",
            "price": 285,
            "image": [
                "https://m.media-amazon.com/images/I/71EBt3nfrvL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/315OmHGonUL.jpg",
                "https://m.media-amazon.com/images/I/51CgcAZ0oNL._SL1280_.jpg",
                "https://m.media-amazon.com/images/I/61uDm5k3uJL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "6",
            "uniqueId": "HOARD-006",
            "name": "Hoard Led Plug In Smart Night Lamp With Automatic Sensor Smart Led Night Lamp -(Whiskey White) Pack Of 1(Polycarbonate)",
            "description": "Hoard Led Plug In Smart Night Lamp With Automatic Sensor Smart Led Night Lamp -(Whiskey White) Pack Of 1(Polycarbonate)",
            "price": 283,
            "image": [
                "https://m.media-amazon.com/images/I/61xD6duq-bL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/41VivSjAsyL._SL1156_.jpg",
                "https://m.media-amazon.com/images/I/51OkxkYkWYL._SL1280_.jpg",
                "https://m.media-amazon.com/images/I/51rRqRThJML._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "7",
            "uniqueId": "HOARD-007",
            "name": "HOARD Sense Light 0.5W Automatic Sensor Smart LED Night Lamp (Yellow) Pack of 1",
            "description": "HOARD Sense Light 0.5W Automatic Sensor Smart LED Night Lamp (Yellow) Pack of 1",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/81vRP5coaYL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51SVEJ352hL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/41x6nAL76EL._SL1156_.jpg",
                "https://m.media-amazon.com/images/I/91iaD28yJzL._SL1500_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "8",
            "uniqueId": "HOARD-008",
            "name": "HOARD Plastic 0.5W Led Night Lamp With Smiley Face -Pack Of 1 (Yellow)",
            "description": "HOARD Plastic 0.5W Led Night Lamp With Smiley Face -Pack Of 1 (Yellow)",
            "price": 189,
            "image": [
                "https://m.media-amazon.com/images/I/51TzpXs08fL._SL1394_.jpg",
                "https://m.media-amazon.com/images/I/615CuP4iXML._SL1475_.jpg",
                "https://m.media-amazon.com/images/I/51tPufv6klL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51XD74o3zfL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "9",
            "uniqueId": "HOARD-009",
            "name": "HOARD 0.5W LED Night Lamp with Smiley Face-Pack of 1 (White)",
            "description": "HOARD 0.5W LED Night Lamp with Smiley Face-Pack of 1 (White)",
            "price": 199,
            "image": [
                "https://m.media-amazon.com/images/I/71xId9J-KvL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61+S3-vN2OL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/610T+UEnKPL._SL1431_.jpg",
                "https://m.media-amazon.com/images/I/61sjn8QLxKL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "10",
            "uniqueId": "HOARD-010",
            "name": "HOARD plastic 0.5W LED Night Lamp with Smily Face -Pack of 1 (RED)",
            "description": "HOARD plastic 0.5W LED Night Lamp with Smily Face -Pack of 1 (RED)",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/416GjwODOiL._SL1349_.jpg",
                "https://m.media-amazon.com/images/I/61R6vHo7hNL._SL1454_.jpg",
                "https://m.media-amazon.com/images/I/51IJSvvo-XL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61TYG5cavaL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "11",
            "uniqueId": "HOARD-011",
            "name": "HOARD 0.5W LED Night Lamp with Smily Face -Pack of 1 (Warm White)",
            "description": "HOARD 0.5W LED Night Lamp with Smily Face -Pack of 1 (Warm White)",
            "price": 270,
            "image": [
                "https://m.media-amazon.com/images/I/61ZYJgH1pzL._SL1366_.jpg",
                "https://m.media-amazon.com/images/I/61+S3-vN2OL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/610T+UEnKPL._SL1431_.jpg",
                "https://m.media-amazon.com/images/I/61sjn8QLxKL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "12",
            "uniqueId": "HOARD-012",
            "name": "HOARD plastic 0.5W LED Night Lamp with Smiley Face -Pack of 1 (Pink)",
            "description": "HOARD plastic 0.5W LED Night Lamp with Smiley Face -Pack of 1 (Pink)",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/511xfwuFpcL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51aro3Aji5L._SL1427_.jpg",
                "https://m.media-amazon.com/images/I/61cYiSIeLgL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61OPVxVzHdL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "13",
            "uniqueId": "HOARD-013",
            "name": "HOARD plastic 0.5W LED Night Lamp with Smily Face-Pack of 1 (Green)",
            "description": "HOARD plastic 0.5W LED Night Lamp with Smily Face-Pack of 1 (Green)",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/51up12Eq07L._SL1366_.jpg",
                "https://m.media-amazon.com/images/I/61zTD6253iL._SL1318_.jpg",
                "https://m.media-amazon.com/images/I/615czUKhbTL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61DCdPZyjuL._SL1500_.jpg",
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "14",
            "uniqueId": "HOARD-014",
            "name": "HOARD Plastic 0.5W Led Night Lamp With Smiley Face-Pack Of 1 (Blue)",
            "description": "HOARD Plastic 0.5W Led Night Lamp With Smiley Face-Pack Of 1 (Blue)",
            "price": 188,
            "image": [
                "https://m.media-amazon.com/images/I/61XnLYbk2DL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71jXZJoyqbL._SL1437_.jpg",
                "https://m.media-amazon.com/images/I/61QWaLlbBBL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61poTiuo0kL._SL1500_.jpg"
            ],
            "category": "smiley-lights",
            "featured": false
        },{
            "id": "15",
            "uniqueId": "HOARD-015",
            "name": "HOARD Devine Series Night Lamp | Lord Ganesha Blessings 0.5W LED Plug-in Night Lamp for Pooja Room",
            "description": "HOARD Devine Series Night Lamp | Lord Ganesha Blessings 0.5W LED Plug-in Night Lamp for Pooja Room",
            "price": 255,
            "image": [
                "https://m.media-amazon.com/images/I/71-PT5mLtuL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71QjCOPBfcL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71P-o6LsyNL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71lwrct4p8L._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "16",
            "uniqueId": "HOARD-016",
            "name": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Goddess Laxmi and Ganesha)",
            "description": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Goddess Laxmi and Ganesha)",
            "price": 255,
            "image": [
                "https://m.media-amazon.com/images/I/71g9Sbb47jL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81o-W7OLKxL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81LNNectstL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "17",
            "uniqueId": "HOARD-017",
            "name": "HOARD Devine Series Night Light (Kanha) | Pooja Room | Night lamp | Bedroom Night Light",
            "description": "HOARD Devine Series Night Light (Kanha) | Pooja Room | Night lamp | Bedroom Night Light",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/615EPvc22CL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71U08qd1xvL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71eAyfZcNFL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71WDwvMXCkL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "18",
            "uniqueId": "HOARD-018",
            "name": "HOARD Devine Series Night Lamp: Lord Krishna Night lamp",
            "description": "HOARD Devine Series Night Lamp: Lord Krishna Night lamp",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/71ujkD-zYvL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71ICbnbhRkL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71YxomncaML._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61WSemHiFFL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "19",
            "uniqueId": "HOARD-019",
            "name": "HOARD Divine Glow: Lakshmi MATA Night Lamp",
            "description": "HOARD Divine Glow: Lakshmi MATA Night Lamp",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/81V8E75Y4ZL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71RJqjtYG+L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81Ar9PHhppL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "20",
            "uniqueId": "HOARD-020",
            "name": "HOARD Devine Series Night Lamp | Lord Ram Lalla Night Lamp: Illuminate Your Sacred Space",
            "description": "HOARD Devine Series Night Lamp | Lord Ram Lalla Night Lamp: Illuminate Your Sacred Space",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/81wDhJyqn0L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61zHWiIpHBL._SL1080_.jpg",
                "https://m.media-amazon.com/images/I/71ev-XFe6zL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "21",
            "uniqueId": "HOARD-021",
            "name": "HOARD Spiritual Illumination: Neem Karoli Photo Light",
            "description": "HOARD Spiritual Illumination: Neem Karoli Photo Light",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/715AmwSguCL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71CXE7n3+bL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71nev9vXqFL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71dlYqQcxvL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "22",
            "uniqueId": "HOARD-022",
            "name": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Radha Krishna)",
            "description": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Radha Krishna)",
            "price": 255,
            "image": [
                "https://m.media-amazon.com/images/I/61zTLXmn5jL._SL1080_.jpg",
                "https://m.media-amazon.com/images/I/71f8WvVv3JL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71mmI1e6XeL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "23",
            "uniqueId": "HOARD-023",
            "name": "HOARD Lord Shiva Blessings 0.5W LED Plug-in Night Lamp for Pooja Room",
            "description": "HOARD Lord Shiva Blessings 0.5W LED Plug-in Night Lamp for Pooja Room",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/71n8cEaXyBL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51wK-VQqXOL.jpg",
                "https://m.media-amazon.com/images/I/71Ealc+d5ZL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81t7PBhTpDL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": true
        },{
            "id": "24",
            "uniqueId": "HOARD-024",
            "name": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Vaibhav Laxami)",
            "description": "HOARD Devine Series Night Lamp 0.5W LED Plug-in Light for Pooja Room (Vaibhav Laxami)",
            "price": 256,
            "image": [
                "https://m.media-amazon.com/images/I/71oeFcvVbZL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71XYb47ZbQL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71T9+mfCM5L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81XGGaWk6rL._SL1500_.jpg"
            ],
            "category": "devine-series",
            "featured": false
        },{
            "id": "25",
            "uniqueId": "HOARD-025",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "price": 299,
            "image": [
                "https://m.media-amazon.com/images/I/51AZI-wv1PL._SY500_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "26",
            "uniqueId": "HOARD-026",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Clear White, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Clear White, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/61kkY5OprAL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "27",
            "uniqueId": "HOARD-027",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Green, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Green, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/61ki0xTELyL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "28",
            "uniqueId": "HOARD-028",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Orange, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Orange, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/61fGHbfPe6L._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "29",
            "uniqueId": "HOARD-029",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Pink, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Pink, Pack of 1)",
            "price": 299,
            "image": [
                "https://m.media-amazon.com/images/I/61Lj5TmnVCL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "30",
            "uniqueId": "HOARD-030",
            "name": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Yellow, Pack of 1)",
            "description": "HOARD Hexagon-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Yellow, Pack of 1)",
            "price": 299,
            "image": [
                "https://m.media-amazon.com/images/I/61R4rbRoL6L._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "31",
            "uniqueId": "HOARD-031",
            "name": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "description": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/51G5f8Doa-L._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "32",
            "uniqueId": "HOARD-032",
            "name": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "description": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Blue, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/51hYOzxEquL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "33",
            "uniqueId": "HOARD-033",
            "name": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Off White, Pack of 1)",
            "description": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Off White, Pack of 1)",
            "price": 269,
            "image": [
                "https://m.media-amazon.com/images/I/71wp0eW89DL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61xv+M3f9KL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61f3bDKaugL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61ne6YC7DRL._SL1500_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "34",
            "uniqueId": "HOARD-034",
            "name": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Pink, Pack of 1)",
            "description": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Pink, Pack of 1)",
            "price": 284,
            "image": [
                "https://m.media-amazon.com/images/I/41gYG6pkcWL._SL1280_.jpg"
            ],
            "category": "smart-lights",
            "featured": false
        },{
            "id": "35",
            "uniqueId": "HOARD-035",
            "name": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Yellow, Pack of 1)",
            "description": "HOARD Round-Shaped Warm Amber LED Plug-in Night Lamp with Automatic Sensor, Energy Efficient, Touch Control (Yellow, Pack of 1)",
            "price": 299,
            "image": [
                "https://m.media-amazon.com/images/I/61w+E-RjfcL._SL1280_.jpg",
                "https://m.media-amazon.com/images/I/519VMu6ZK+L._SL1080_.jpg",
                "https://m.media-amazon.com/images/I/617z-8FJvNL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51b2JfgvDlL._SL1080_.jpg"
            ],
            "category": "smart-lights",
            "featured": true
        },{
            "id": "36",
            "uniqueId": "HOARD-036",
            "name": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Brown- Bear)",
            "description": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Brown- Bear)",
            "price": 249,
            "image": [
                "https://m.media-amazon.com/images/I/71IyMzROkML._SL1500_.jpg"
            ],
            "category": "others",
            "featured": false
        },{
            "id": "37",
            "uniqueId": "HOARD-037",
            "name": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Pink- Rabbit)",
            "description": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Pink- Rabbit)",
            "price": 249,
            "image": [
                "https://m.media-amazon.com/images/I/71xkmqFGCfL._SL1500_.jpg"
            ],
            "category": "others",
            "featured": false
        },{
            "id": "38",
            "uniqueId": "HOARD-038",
            "name": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Purple- Penguin)",
            "description": "HOARD Kids Series Night Lamp Blessings 0.5W LED Plugin for Kids Room | Return Birthday Gift for Kids (Purple- Penguin)",
            "price": 249,
            "image": [
                "https://m.media-amazon.com/images/I/61TkDDhheCL._SL1500_.jpg"
            ],
            "category": "others",
            "featured": false
        },{
            "id": "39",
            "uniqueId": "HOARD-039",
            "name": "Hoard Electric Heating Pad - Hot Water Bag for Pain Relief, Reusable and Portable",
            "description": "Hoard Electric Heating Pad - Hot Water Bag for Pain Relief, Reusable and Portable",
            "price": 270,
            "image": [
                "https://m.media-amazon.com/images/I/61fnib0mxcL.jpg",
                "https://m.media-amazon.com/images/I/51zuYzhp1RL.jpg",
                "https://m.media-amazon.com/images/I/41B+4rXnZuL.jpg",
            ],
            "category": "others",
            "featured": false
        },{
            "id": "40",
            "uniqueId": "HOARD-040",
            "name": "Hoard 65W Type C Fast Charger | 65 Watt Charging Adaptor with USB to Type C Cable Combo | Dash Warp Vooc Supervooc Type-C Charger Compatible with All Type-C Devices",
            "description": "Hoard 65W Type C Fast Charger | 65 Watt Charging Adaptor with USB to Type C Cable Combo | Dash Warp Vooc Supervooc Type-C Charger Compatible with All Type-C Devices",
            "price": 550,
            "image": [
                "https://m.media-amazon.com/images/I/51T6yxgxrtL._SL1080_.jpg",
                "https://m.media-amazon.com/images/I/411UfcWD9vL._SL1280_.jpg",
                "https://m.media-amazon.com/images/I/61NhLiEG45L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51xdbWrpOyL._SL1500_.jpg"
            ],
            "category": "others",
            "featured": true
        },{
            "id": "41",
            "uniqueId": "HOARD-041",
            "name": "Hoard 7-Watts Round LED Panel Conceal Down Light (Warm White) -Pack of 4",
            "description": "Hoard 7-Watts Round LED Panel Conceal Down Light (Warm White) -Pack of 4",
            "price": 675,
            "image": [
                "https://m.media-amazon.com/images/I/51tT-yqu3lL.jpg",
                "https://m.media-amazon.com/images/I/41f6aeYerTL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51oS+OMYa-L.jpg",
                "https://m.media-amazon.com/images/I/41hiwgwg52L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/41JVBUgWAYL._SL1500_.jpg"
            ],
            "category": "others",
            "featured": true
        }
        // {
        //     "id": "",
        //     "uniqueId": "HOARD-00",
        //     "name": "",
        //     "description": "",
        //     "price": 270,
        //     "image": [
        //         ""
        //     ],
        //     "category": "smart-lights",
        //     "featured": false
        // },
        
    ]
    }
    return []
  })

//   {
//     "id": "",
//     "uniqueId": "HOARD-00",
//     "name": "",
//     "description": "",
//     "price": 270,
//     "image": [
//         ""
//     ],
//     "category": "smart-lights",
//     "featured": false
// },

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory])
  }

  const updateCategory = (slug, updatedCategory) => {
    setCategories(categories.map((cat) => (cat.slug === slug ? updatedCategory : cat)))
  }

  const deleteCategory = (slug) => {
    setCategories(categories.filter((cat) => cat.slug !== slug))
  }

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((prod) => (prod.id === id ? updatedProduct : prod)))
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id))
  }

  return (
    <StoreContext.Provider
      value={{
        categories,
        products,
        addCategory,
        updateCategory,
        deleteCategory,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}

