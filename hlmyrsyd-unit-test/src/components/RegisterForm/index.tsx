import { Button, Card, Input, Typography } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./registerFormSchema";
import { RegisterForm as RegisterFormProps } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
    onSubmit: (values: RegisterFormProps) => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
    const navigate = useNavigate();

    const handleSubmit = (values: RegisterFormProps) => {
        onSubmit(values);
    };

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
    <>
        <Card title={"Register Page"} bordered style={{ width: "350px" }}>
            <form onSubmit={formMik.handleSubmit}>
            <div>
                <Typography.Paragraph style={{ textAlign: "left" }}>
                {"Name"}
                </Typography.Paragraph>
                <Input
                name={"name"}
                placeholder="Your name"
                value={formMik.values.name}
                onChange={formMik.handleChange("name")}
                status={formMik.errors.name && "error"}
                />
                {formMik.errors.name && (
                <Typography.Paragraph style={{ color: "red" }}>
                    {formMik.errors.name}
                </Typography.Paragraph>
                )}
            </div>
            <div>
                <Typography.Paragraph
                style={{ marginTop: "10px", textAlign: "left" }}
                >
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
                Register
            </Button>
            <Button
                type={"default"}
                htmlType={"submit"}
                style={{ width: "300px", marginTop: "20px" }}
                onClick={() => navigate("/")}
            >
                Back
            </Button>
            </form>
        </Card>
        </>
    );
};

export default RegisterForm;