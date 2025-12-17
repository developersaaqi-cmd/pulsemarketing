"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { baseURL, FireApi, token } from "../../../../../utils/useRequest";
import { Box, Modal } from "@mui/material";
import Image from "next/image";

const Page = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [pages, setPages] = useState([]);
  const [readComponents, setReadComponents] = useState([]);
  const [componentId, setComponentId] = useState("");
  const [editCompProfileId, setEditCompProfileId] = useState("");
  const [imageComp, setImage] = useState("");
  // for form
  const [name, setName] = useState("");
  const [sectionKey, setSectionKey] = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);
  const [open, setOpen] = useState(false);
  const [childId, setChildId] = useState("");

  const getPageData = async () => {
    try {
      const res = await FireApi("page/read", "GET");
      setPages(res?.data?.pages || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const getComponentProfileById = async () => {
    try {
      const res = await FireApi(`component/read/${editCompProfileId}`, "GET");
      console.log(res?.data?.component?.child_components, "faakjajaja");
      setName(res?.data?.component?.child_components[0]?.name || "");
      setSectionHeading(
        res?.data?.component?.child_components[0]?.header || "",
      );
      setSectionKey(res?.data?.component?.child_components[0]?.section || "");
      setContent(res?.data?.component?.child_components[0]?.content || "");
      setImage(res?.data?.component?.child_components[0]?.pictures[0] || "");
      setChildId(res?.data?.component?._id || "");
      console.log(res?.data?.component?._id, "childId");

      console.log(res);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const handleUpdatePortfolio = async (e) => {
    e.preventDefault();

    // Create a proper FormData object
    const formData = new FormData();

    // Append all the necessary fields
    formData.append("name", name);
    formData.append("id", childId);
    formData.append("section", sectionKey);
    formData.append("content", content);
    formData.append("page", selectedPage);
    formData.append("index", "0");

    if (pictures && pictures instanceof File) {
      formData.append("file", pictures);
    }

    try {
      const response = await fetch(`${baseURL}/component/update`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Portfolio updated successfully!");
        handleClose();
        window.location.reload();
      } else {
        alert("Failed to update portfolio");
        console.log("Error updating portfolio:", await response.json());
      }
    } catch (error) {
      console.log("Error in update request:", error);
      alert("Error updating portfolio");
    }
  };

  const handleDeletePortfolio = async (e) => {
    e.preventDefault();
    const res = FireApi(`component/delete/${childId}`, "DELETE");
    console.log(res);
    alert("Portfolio deleted successfully!");
    handleClose();
    window.location.reload();
  };

  useEffect(() => {
    if (editCompProfileId) {
      getComponentProfileById();
    }
  }, [editCompProfileId]);

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      getComponentData();
    }
  }, [selectedPage]);

  const getComponentData = async () => {
    try {
      const res = await FireApi(`component/read?page=${selectedPage}`, "GET");
      setReadComponents(res?.data?.components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  const handleFileChange = (e) => {
    setPictures(e.target.files[0]);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !sectionKey || !sectionHeading) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();

    formData.append("page", selectedPage);
    formData.append("name", name);
    formData.append("section", sectionKey);
    formData.append("header", sectionHeading);
    formData.append("content", content);
    formData.append("is_child", true);
    formData.append("component_id", componentId);

    for (let i = 0; i < pictures.length; i++) {
      formData.append("file", pictures[i]);
    }

    try {
      const response = await fetch(`${baseURL}/component/add`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert("Sucess:)", data);
        setSelectedPage("");
        setName("");
        setSectionKey("");
        setSectionHeading("");
        setContent("");
        setPictures([]);
        setComponentId("");
      } else {
        console.log("Error submitting form:", response.error);
      }
    } catch (err) {
      alert("Error submitting form:", err.message);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Portfolio" />

      <div className="flex w-full items-center justify-center">
        <div className="mx-auto rounded-md bg-white p-6 shadow-2 lg:w-[60%]">
          <h2 className="mb-4 text-lg font-bold text-black">
            Add Portfolio Inner Page
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Dropdown for Page Selection */}
            <div>
              <label className="text-gray-700">
                Select Portfolio Tab Name:
              </label>
              <select
                className="mt-1 w-full rounded border p-2 text-black"
                onChange={(e) => setSelectedPage(e.target.value)}
                value={selectedPage}
              >
                {pages.length > 0 ? (
                  pages
                    .filter((page) => page.name.startsWith("Portfolio"))
                    .map((page) => (
                      <option
                        key={page._id}
                        value={page._id}
                        style={{ color: "black" }}
                      >
                        {page.name}
                      </option>
                    ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Dropdown for Component Selection */}
            <div>
              <label className="text-gray-700">
                Select Your Portfolio Component:
              </label>
              <select
                className="mt-1 w-full rounded border p-2 text-black"
                onChange={(e) => setComponentId(e.target.value)}
                value={componentId}
              >
                {readComponents.length > 0 ? (
                  readComponents.map((page) => (
                    <option
                      key={page._id}
                      value={page._id}
                      style={{ color: "black" }}
                    >
                      {page.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Project Name */}
            <div>
              <label className="text-gray-700">Project Name:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Project Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Key..."
                value={sectionKey}
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Header Section:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content:</label>
              <textarea
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="text-gray-700">Upload Pictures:</label>
              <input
                type="file"
                multiple
                className="mt-1 w-full rounded border p-2"
                onChange={handleFileChange}
              />
            </div>
            <span
              className="mr-2 rounded border border-blue-500 px-4 py-2 text-blue-500"
              onClick={handleOpen}
            >
              Edit Portfolio
            </span>

            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "none",
            outline: "none",
            boxShadow: 24,
            p: 4,
            width: 650,
            height: 500,
            overflow: "auto",
          }}
        >
          <form onSubmit={handleUpdatePortfolio} className="space-y-4">
            {/* Dropdown for Portfolio Categories */}
            <div>
              <label className="text-gray-700">
                Select Portfolio Category:
              </label>
              <select
                className="mt-1 w-full rounded border p-2 text-black"
                onChange={(e) => setSelectedPage(e.target.value)}
                value={selectedPage}
              >
                {pages.length > 0 ? (
                  pages
                    .filter((page) => page.name.startsWith("Portfolio"))
                    .map((page) => (
                      <option key={page._id} value={page._id}>
                        {page.name}
                      </option>
                    ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Dropdown for Component Selection */}
            <div>
              <label className="text-gray-700">Select Portfolio:</label>
              <select
                className="mt-1 w-full rounded border p-2 text-black"
                onChange={(e) => setEditCompProfileId(e.target.value)}
                value={editCompProfileId}
              >
                {readComponents.length > 0 ? (
                  readComponents.map((page) => (
                    <option key={page._id} value={page._id}>
                      {page.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>

            {/* Project Name */}
            <div>
              <label className="text-gray-700">Project Name:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Project Name..."
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Section Identity Key */}
            <div>
              <label className="text-gray-700">Section:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Key..."
                value={sectionKey}
                name="sectionId"
                onChange={(e) => setSectionKey(e.target.value)}
              />
            </div>

            {/* Section Identity Heading */}
            <div>
              <label className="text-gray-700">Header Section:</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-2"
                placeholder="Enter Section Heading..."
                value={sectionHeading}
                name="seeactionHead"
                onChange={(e) => setSectionHeading(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-gray-700">Content</label>
              <textarea
                className="mt-1 w-full rounded border p-2 text-black"
                placeholder="Enter content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
              />
            </div>

            {/* File Upload */}
            <div>
              {" "}
              <label className="text-gray-700">Upload Pictures:</label>
              <input
                type="file"
                multiple
                className="mt-1 w-full rounded border p-2"
                onChange={handleFileChange}
              />
              <p className="text-sm text-gray-500">
                Image should be less than 1MB in size & format should be PNG,
                JPG, JPEG
              </p>
            </div>

            <button
              className="mr-2 rounded border border-blue-500 px-4 py-2 text-white"
              onClick={handleClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="mr-2 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Update Portfolio
            </button>
            <button
              onClick={handleDeletePortfolio}
              className="my-2 rounded bg-red-500 px-4 py-2 text-white"
            >
              Delete Portfolio
            </button>
          </form>
        </Box>
      </Modal>
    </DefaultLayout>
  );
};

export default Page;
