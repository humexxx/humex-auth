import { TypographyOwnProps } from '@mui/material/Typography';

interface CopyrightProps extends TypographyOwnProps {
    websiteName: string;
    websiteUrl: string;
}

interface SignInForm {
    email: string;
    password: string;
}
interface SignInProps {
    handleOnSubmit: (form: SignInForm) => Promise<void>;
}

export type { CopyrightProps, SignInForm, SignInProps };
