import { Link } from "react-router-dom"

const Footer = () => {
    return (
       <div>
        hello
       </div>
    )
}

export default Footer


// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}{new Date().getFullYear()}{' '}
//       <Link color="inherit" href="https://mui.com/">
// Topplancareservices      </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function StickyFooter() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '75vh',
//           position: 'fixed',
//           width: '100%',
//         }}
//       >
//         <CssBaseline />
//        <Box
//           component="footer"
//           sx={{
//             py: 3,
//             px: 2,
//             mt: 'auto',
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[800],
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography variant="body1">
//               {/* My sticky footer can be found here. */}
//             </Typography>
//             <Copyright />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }