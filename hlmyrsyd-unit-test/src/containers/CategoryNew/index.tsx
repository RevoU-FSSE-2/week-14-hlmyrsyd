import { CategoryForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { CategoryForm as CategoryFormProps } from "../../types";
import { Card } from "antd";

const CategoryNew = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: CategoryFormProps) => {
        try {
        const token = sessionStorage.getItem("token");

        if (!token) {
            alert("Session is expired. Please log in.");
            navigate("/");
            return;
        }

        const fetching = await fetch(
            "https://mock-api.arikmpt.com/api/category/create",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
            }
        );
        await fetching.json();
        navigate("/category");
        } catch (error) {
        alert(error);
        }
    };

    return (
        <>
        <Card title={"Add Category"} bordered style={{ width: "350px" }}>
            <CategoryForm onSubmit={onSubmit} />
        </Card>
        </>
    );
};

export default CategoryNew;