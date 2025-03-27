import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MovieGrid from './components/MovieGrid';

export default function App(){

	const appTheme=createTheme(theme);

	return(
		<ThemeProvider theme={appTheme}>
			<Header/>
			<Hero/>
			<MovieGrid/>
			<Footer/>
		</ThemeProvider>
	);
}