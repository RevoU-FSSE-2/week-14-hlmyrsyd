import { Typography, Input, Select, Button } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./CategoryFormSchema";
import { CategoryForm as CategoryFormProps, Category } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
    onSubmit: (values: CategoryFormProps) => void;
    category?: Category;
}

const CategoryForm = ({ onSubmit, category }: Props) => {
    const handleSubmit = (values: CategoryFormProps) => {
        onSubmit(values);
    };

    const formMik = useFormik({
        initialValues: category ?? initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    const navigate = useNavigate();

    return (
        <>
        <form onSubmit={formMik.handleSubmit}>
            <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
                {"Name"}
            </Typography.Paragraph>
            <Input
                name={"name"}
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
                style={{ textAlign: "left", marginTop: "10px" }}
            >
                {"Status"}
            </Typography.Paragraph>
            <Select
                style={{ width: "300px", textAlign: "left" }}
                value={formMik.values.is_active}
                onChange={(value) => formMik.setFieldValue("is_active", value)}
                options={[
                {
                    value: true,
                    label: "Active",
                },
                {
                    value: false,
                    label: "Deactive",
                },
                ]}
            ></Select>
            {formMik.errors.is_active && (
                <Typography.Paragraph style={{ color: "red" }}>
                {formMik.errors.is_active}
                </Typography.Paragraph>
            )}
            </div>
            <Button
            type={"primary"}
            htmlType={"submit"}
            style={{ marginTop: 20, width: "300px" }}
            >
            Submit
            </Button>
            <Button
            type={"default"}
            htmlType={"submit"}
            style={{ marginTop: 10, width: "300px" }}
            onClick={() => navigate("/category")}
            >
            Back
            </Button>
        </form>
        </>
  );
};

export default CategoryForm;