import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SignIn, { SignInForm } from "./components/signin";
import Copyright from "./components/copyright";

function App() {
  const handleOnSubmit = async (form: SignInForm) => {
    console.log(form);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignIn handleOnSubmit={handleOnSubmit} />
      <Copyright sx={{ mt: 8, mb: 4 }} websiteName="My VAMOO website" websiteUrl="google.com" />
    </Container>
  );
}

export default App;
