import { RegisterForm } from "../../components";
import {
    RegisterForm as RegisterFormProps,
    RegisterResponse,
} from "../../types";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const onSubmit = async (data: RegisterFormProps) => {
        const fetching = await fetch(
        "https://mock-api.arikmpt.com/api/user/register",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
        );
        const response: RegisterResponse = await fetching.json();
        console.log(response);

        if (fetching.ok) {
        navigate("/");
        } else {
        console.error("Registration failed");
        }
    };

    return (
        <>
        <RegisterForm onSubmit={onSubmit} />
        </>
    );
};

export default Register;