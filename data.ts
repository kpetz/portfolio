import { IService } from './type';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>.',
    },
    {
        Icon: FaServer,
        title: 'Backend Development',
        about: 'Handle database, server, api using <b>Express</b> & other popular frameworks.',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'I can develop robust REST API using <b>Django-rest-api</b> & <b>Node API</b>.',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive Coder',
        about: 'A daily problem resolver in <b>HackerRank</b> and <b>Leet Code</b>.',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Designer',
        about: 'Stunning user interface designer using <b>Figma</b> and <b>Framer</b>',
    }
    ,
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        about: 'Lorem ipsu buidl and beautiful and anything.',
    }
]