/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import toast, { ToastBar, Toaster, Toast as ToastProps } from "react-hot-toast";
import Routing from "./routing/Routing";
import { Toast } from "@componlyco/berkoukes";
import type { ToastType } from 'react-hot-toast'
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme(); // Create a default theme
interface T extends ToastProps {
	subtitle?: string
	onClick: (e: any) => void
}
function toastTypeToBerkoukes(type: ToastType) {
	console.log(type)
	if (['warning', 'success', 'error'].includes(type)) return type
	if (type === 'blank') return 'neutural'
	return 'success'
}

function App() {
  return (
 <>  

				<ThemeProvider theme={theme}>
<HelmetProvider>
      <Routing />;
			<Toaster>
				{(t: T) => {
					return (
						<ToastBar
							toast={t}
							style={{
								background: 'none',
								boxShadow: 'none',
								maxWidth: 'max-content'
							}}
						>
							{props => {
								return (
									<>
										<Toast

											//@ts-ignore
											type={toastTypeToBerkoukes(t.type)}
											//@ts-ignore
											title={t.message}
											message={t?.subtitle}
											onClick={
												t.type === 'error'
													? () =>
														window.open(
															'https://componly.instatus.com/',
															'_target'
														)
													: t?.onClick
											}
											onClose={() => toast.dismiss(t.id)}
											withButton={
												t.type === 'error' || Boolean(t?.onClick)
											}
											buttonTitle={
												//@ts-ignores
												''
											}
											sx={{
												minWidth: '400px',
												'& button': {
													margin: '3px'
												}
											}}
										/>
									</>
								)
							}}
						</ToastBar>
					)
				}}
			</Toaster>

</HelmetProvider>
				</ThemeProvider>
    </>
  );
}

export default App;
