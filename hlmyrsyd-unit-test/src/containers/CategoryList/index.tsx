import { ColumnsType } from "antd/es/table";
import { CategoryList as CategoryListComponent } from "../../components";
import { Category, GetCategoryResponse } from "../../types";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token");

    const getCategoryList = async () => {
        const fetching = await fetch("https://mock-api.arikmpt.com/api/category", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const response: GetCategoryResponse = await fetching.json();
    setCategories(response.data ?? []);
    };

    useEffect(() => {
    getCategoryList();
    }, []);

    const removeCategory = async (id: string) => {
        try {
        const fetching = await fetch(
            `https://mock-api.arikmpt.com/api/category/${id}`,
            {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        );

        if (fetching.ok) {
            setCategories((categories) =>
            categories.filter((category) => category.id !== id)
            );
        }
        } catch (error) {
        alert(error);
        }
    };

    const columns: ColumnsType<Category> = [
        {
        title: "ID",
        dataIndex: "id",
        key: "id",
        },
        {
        title: "Name",
        dataIndex: "name",
        key: "name",
        },
        {
        title: "Status",
        dataIndex: "is_active",
        key: "is_active",
        render: (is_active: boolean) => (is_active ? "Active" : "Deactive"),
        },
        {
        title: "Action",
        key: "edit",
        render: (_, record) => (
            <>
            <Button
                type={"primary"}
                onClick={() => navigate(`/category/edit/${record.id}`)}
            >
                Edit
            </Button>
            <Button
                type={"primary"}
                danger
                onClick={() => removeCategory(record.id)}
                style={{ marginLeft: "5px" }}
            >
                Delete
            </Button>
            </>
        ),
        },
    ];

    const handleSignout = () => {
        sessionStorage.removeItem("token");
        window.location.replace("/");
    };

    return (
        <>
        <h1>List of Category</h1>
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            }}
        >
            <Button type={"primary"} onClick={() => navigate("/category/new")}>
            Add Category
            </Button>
            <Button type={"default"} onClick={handleSignout}>
            Sign Out
            </Button>
        </div>
        <CategoryListComponent columns={columns} data={categories} />
        </>
    );
};

export default CategoryList;