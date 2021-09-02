import { useAlert } from '../context/alertContext'
import { Message } from 'semantic-ui-react'

export default function Alert() {
    const { showMe, icon, color, header, content } = useAlert()

    return (
        <Message 
            floating
            size="big"
            hidden={showMe} 
            color={color} 
            icon={icon} 
            header={header} 
            content={content} 
        />
    )
}
