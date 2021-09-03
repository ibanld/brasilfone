import { Container, Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu'
import About from './About'
import Starting from './Starting'

const container = {
    backgroundColor: '#263859',
    color: 'white',
    heigth: 'auto'
}

export default function Guide() {
    return (
        <Container fluid style={container}>
            <Grid>
                <Grid.Column width={3}>
                    <SideMenu />
                </Grid.Column>
                <Grid.Column width={13}>
                    <About />
                    <Starting />
                </Grid.Column>
            </Grid>
        </Container>
    )
}
