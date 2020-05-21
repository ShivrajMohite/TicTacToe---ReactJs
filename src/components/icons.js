import React from "react"
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icons"></FaRegCircle>
        case 'cross':
            return <FaTimes className="icon"></FaTimes>
        default:
            return <FaPen className="icon"></FaPen>
            break;
    }
}

export default Icon;