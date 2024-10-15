"use client";

import { useState, useMemo, useCallback } from "react";
import LoadindPosts from "@/components/shared/Loading/loadingPost";
import FilterInput from "@/components/shared/Forms/FilterInput";
import ActionsComponent from "@/components/shared/GeneralTable/Actions";
import TableComponent from "@/components/shared/GeneralTable/GeneralTable";
import { FetchProjects, useDeleteProjects } from "@/hooks/useProjects";
import { FaPlus } from "react-icons/fa";
import PostsProject from "./PostProject";
import UpdatesProject from "./UpdateProject";
import { Project } from "./schema";
import Popup from "@/components/shared/pop-up/pop-up";

const ListProjects = () => {
  const { data, isError, isLoading } = FetchProjects();
  console.log(data?.data); // Log to ensure data is being accessed correctly

  const deleteProjects = useDeleteProjects();
  const [showPopup, setShowPopup] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");

  const handleDelete = useCallback(async (id: string) => {
    setIsLoadingDelete(true);
    try {
      await deleteProjects.mutateAsync(id);
    } finally {
      setIsLoadingDelete(false);
    }
  }, [deleteProjects]);

  const handleEdit = useCallback((id: string | undefined) => {
    if (id) {
      setEditItemId(id);
      setShowPopup(true);
    } else {
      console.error("ID is undefined or not a string");
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setEditItemId(null);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "اسم المشروع" },
      { accessorKey: "description", header: "وصف المشروع" },
      { accessorKey: "location", header: "موقع المشروع" },
      { accessorKey: "status", header: "حالة المشروع" },
      {
        id: "actions-list",  
        header: "الإجراءات",
        cell: ({ row }: { row: { original: Project } }) => (
          <ActionsComponent
            original={row.original}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isLoadingDelete={isLoadingDelete}
          />
        ),
      },
    ],
    [handleEdit, handleDelete, isLoadingDelete]
  );

  // Display loading or error states
  if (isError) return <h1>Error loading data</h1>;
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadindPosts />
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-auto lg:w-full lg:container" style={{ maxWidth: "calc(120% - 5px)" }}>
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={() => {
            setEditItemId(null); // Ensure ID is cleared for a new project
            setShowPopup(true);
          }}
          className="px-6 py-2 rounded-3xl bg-blue-600 font-medium text-white text-md flex items-center gap-2"
        >
          <FaPlus /> اضافة مشروع جديد
        </button>
        <FilterInput globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </div>

      {showPopup && (
        <Popup onClose={closePopup}>
          {editItemId !== null ? (
            <UpdatesProject id={editItemId} onClose={closePopup} />
          ) : (
            <PostsProject onClose={closePopup} />
          )}
        </Popup>
      )}

      <TableComponent<Project> data={data?.data || []} columns={columns} globalFilter={globalFilter} />
    </div>
  );
};

export default ListProjects;
