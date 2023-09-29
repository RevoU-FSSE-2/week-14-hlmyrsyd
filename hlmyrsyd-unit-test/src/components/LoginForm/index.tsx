import { Button, Card, Input, Typography } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./loginFormSchema";
import { LoginForm as LoginFormProps } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
    onSubmit: (values: LoginFormProps) => void;
    }

const LoginForm = ({ onSubmit }: Props) => {
    const navigate = useNavigate();

    const handleSubmit = (values: LoginFormProps) => {
        onSubmit(values);
    };

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <>
        <Card title={"Login Page"} bordered style={{ width: "350px" }}>
            <form onSubmit={formMik.handleSubmit}>
            <div>
                <Typography.Paragraph style={{ textAlign: "left" }}>
                {"Email"}
                </Typography.Paragraph>
                <Input
                name={"email"}
                placeholder="Your email"
                value={formMik.values.email}
                onChange={formMik.handleChange("email")}
                status={formMik.errors.email && "error"}
                />
                {formMik.errors.email && (
                <Typography.Paragraph style={{ color: "red" }}>
                    {formMik.errors.email}
                </Typography.Paragraph>
                )}
            </div>
            <div>
                <Typography.Paragraph
                style={{ marginTop: "10px", textAlign: "left" }}
                >
                {"Password"}
                </Typography.Paragraph>
                <Input.Password
                name={"password"}
                placeholder="Your password"
                value={formMik.values.password}
                onChange={formMik.handleChange("password")}
                status={formMik.errors.password && "error"}
                />
                {formMik.errors.password && (
                <Typography.Paragraph style={{ color: "red" }}>
                    {formMik.errors.password}
                </Typography.Paragraph>
                )}
            </div>
            <Button
                type={"primary"}
                htmlType={"submit"}
                style={{ width: "300px", marginTop: 20 }}
            >
                Login
            </Button>
            </form>
            <div style={{ marginTop: "30px" }}>
            <p style={{ fontStyle: "italic" }}>Don't have any account yet? </p>
            <Button
                type={"default"}
                htmlType={"submit"}
                style={{ width: "300px" }}
                onClick={() => navigate("/register")}
            >
                Register
            </Button>
            </div>
        </Card>
        </>
    );
};

export default LoginForm;