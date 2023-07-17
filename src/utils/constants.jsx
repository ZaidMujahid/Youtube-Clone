import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineTrophy } from 'react-icons/ai'
import { AiOutlineShopping } from 'react-icons/ai'
import { BiMusic } from 'react-icons/bi'
import { BiNews } from 'react-icons/bi'
import { BiCodeAlt } from 'react-icons/bi'
import { PiFilmSlateDuotone } from 'react-icons/pi'
import { PiGraduationCapLight } from 'react-icons/pi'
import { PiGameControllerDuotone } from 'react-icons/pi'
import { GiClothes } from 'react-icons/gi'
import { GiBodyBalance } from 'react-icons/gi'
import { TbLivePhoto } from 'react-icons/tb'

export const categories = [
    {name:"All", icon:<AiOutlineHome/>},
    {name:"Shopping", icon:<AiOutlineShopping/>},
    {name:"Music", icon:<BiMusic/>},
    {name:"Coding", icon:<BiCodeAlt/>},
    {name:"Movies", icon:<PiFilmSlateDuotone/>},
    {name:"Gaming", icon:<PiGameControllerDuotone/>},
    {name:"Callisthenics", icon:<GiBodyBalance/>},
    {name:"Live", icon:<TbLivePhoto/>},
    {name:"News", icon:<BiNews/>},
    {name:"Sports", icon:<AiOutlineTrophy/>},
    {name:"Learning", icon:<PiGraduationCapLight/>},
    {name:"Fashion", icon:<GiClothes/>},
]