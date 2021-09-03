import { Container, Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu'
import About from './About'
import Starting from './Starting'
import APIDocs from './APIDocs'
import Development from './Development'

const container = {
    backgroundColor: '#263859',
    color: 'white'
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
                    <APIDocs />
                    <Development />
                </Grid.Column>
            </Grid>
        </Container>
    )
}
