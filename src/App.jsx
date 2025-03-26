import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {

	const appTheme=createTheme(theme);

	return(
		<ThemeProvider theme={appTheme}>
			<Header/>
			<Hero/>
			<Footer/>
		</ThemeProvider>
	);
}