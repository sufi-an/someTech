import { Select } from "src/app/interfaces/select";


export const GENDERS: Select[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Others', viewValue: 'Others'}
  ];

export const DESKTOP:Select[]=[
    {value:'Special PC'},
    {value:{Star_PC:[
        'Ryzen PC',
        'Intel Pc'
    ]}},
    {value:'Gaming PC'},
    {value:{BRAND_PC:[
        "lenovo",
        "hp",
        "Dell",
        "Acer",
        "Asus",
        "Walton"
    ]}},
    {value:'All In One PC'},
    {value:'Portable Mini PC'},
    {value:'Apple Mac mini '},
    {value:'Apple iMac'},
    {value:'Budget PC'},
    {value:'Show All Desktop'},
]
export const LAPTOP:Select[]=[]

export const COMPONENT:Select[]=[]

export const MONITOR:Select[]=[]

export const UPS:Select[]=[]

export const TABLET:Select[]=[]

export const OFFICE_EQUIPMENT:Select[]=[]

export const CAMERA:Select[]=[]

export const SECURITY:Select[]=[]

export const NETWORKING:Select[]=[]

export const ACCESSORIES:Select[]=[]

export const SOFTWARE:Select[]=[]

export const SERVER_STORAGE:Select[]=[]

export const TV:Select[]=[]

export const AC:Select[]=[]

export const GADGET:Select[]=[]
export const GAMING:Select[]=[]


