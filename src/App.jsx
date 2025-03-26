import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import theme from './theme';
import Header from './components/Header';

export default function App() {

	const appTheme=createTheme(theme);

	return(
		<ThemeProvider theme={appTheme}>
			<Header/>
		</ThemeProvider>
	);
}