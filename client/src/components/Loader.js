import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react'


const loader = {
    backgroundColor: '#17223B'
}

export default function Loading() {

    return (
        <Segment inverted> 
            <Dimmer active style={loader}>
                 <Loader>Carregando...</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

        </Segment>
    )
}
