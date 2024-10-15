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
import { motion } from "framer-motion"; 

const ListProjects = () => {
 
  const { data, isError, isLoading } = FetchProjects();
  console.log(data?.data); 

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
            setEditItemId(null);
            setShowPopup(true);
          }}
          className="px-6 py-2 rounded-3xl bg-blue-600 font-medium text-white text-md flex items-center gap-2"
        >
          <FaPlus /> اضافة مشروع جديد
        </button>
        <FilterInput globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="relative w-[90%] max-w-lg h-[80%] max-h-screen bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
            <Popup onClose={closePopup}>
              {editItemId !== null ? (
                <UpdatesProject id={editItemId} onClose={closePopup} />
              ) : (
                <PostsProject onClose={closePopup} />
              )}
            </Popup>
          </div>
        </motion.div>
      )}

      <TableComponent<Project> data={data?.data || []} columns={columns} globalFilter={globalFilter} />
    </div>
  );
};

export default ListProjects;
