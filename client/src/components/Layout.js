import { Container } from 'semantic-ui-react'

export default function Layout({ children }) {
    return (
        <Container fluid inverted>
            { children }
        </Container>
    )
}
