import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utility/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack, Alert } from "@mui/material";

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ){
        registerUser(
            registerInput: $registerInput
        ){
          email
          userName
          token
        }
    }
`;

function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    function registerUserCallback() {
        console.log("Callback hit");
        registerUser();
    };
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [registerUser, { loading }] = useMutation(REGISTER_USER, {      
        update(proxy, { data: { registerUser: userData } }) {            
            context.login(userData);           
            navigate('/');            
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { registerInput: values }
    });

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Registro</h3>
            <p>Página de registro, regístrate para crear una cuenta.</p>
            <Stack spacing={2} paddingBottom={2}>
                <TextField
                    label="Usuario"
                    name="userName"
                    onChange={onChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    onChange={onChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                />
                <TextField
                    label="Confirma password"
                    name="confirmPassword"
                    onChange={onChange}
                />
            </Stack>
            {errors.map(function (error, index) {
                return (
                    <Alert key={index} severity="error" sx={{marginBottom: 2}}>
                        {error.message}
                    </Alert>
                )
            })}
            <Button fullWidth variant="contained" onClick={onSubmit}>
                Registro
            </Button>
        </Container>
    )
};

export default Register;