import { Container, Stack, Typography, Button, Link } from '@mui/material';
import { useTheme } from "@mui/material/styles"

// statusCode returns 'undefined' in development environment
export default function Error({ statusCode }) {
    const theme = useTheme()

    // Custom Error Message based on Status Code
    const errorStatus = {
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '403': 'Forbidden',
        '404': 'Page Not Found',
        '405': 'Method Not Allowed',
        '408': 'Request Timeout',
        '429': 'Too Many Requests',
        '500': 'Internal Server Error',
        '501': 'Not Implemented',
        '502': 'Bad Gateway'
    }

    return (
        <Container maxWidth='lg'>
            <Stack mt={25} spacing={5} justifyContent='center' alignItems='center' textAlign='center'>
                <Typography variant='h3'>{errorStatus[statusCode] !== undefined ? errorStatus[statusCode] : '500 Internal Server Error'}</Typography>
                <Typography variant='body' maxWidth='560px'>
                    Oops, we can't seem to complete the action you requested.
                    Try going back to the{' '}
                    <Link href='/' underline='none' color={ theme.palette.secondary.main } sx={{ fontWeight: 'medium' }}>Landing Page</Link>
                    {' '} or click the button below to get additional help.
                </Typography>
                <Button variant='contained' color='secondary' rel="noreferrer" href='https://discord.gg/jQpFr6ZRXg'>Get Help</Button>
            </Stack>
        </Container>
    )
}
