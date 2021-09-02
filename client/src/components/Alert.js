import { useAlert } from '../context/alertContext'
import { Message } from 'semantic-ui-react'

export default function Alert() {
    const { showMe, icon, color, header, content } = useAlert()

    return (
        <Message 
            floating
            attached="top"
            size="big"
            visible={showMe} 
            color={color} 
            icon={icon} 
            header={header} 
            content={content} 
        />
    )
}
