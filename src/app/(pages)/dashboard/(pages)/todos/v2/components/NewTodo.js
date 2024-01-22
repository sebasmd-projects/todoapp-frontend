"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { LuFolderSymlink } from "react-icons/lu";
import {
  createTodo,
  removeCompleteTodo,
  restoreCompleteTodo,
} from "@todo/requests/todos";

export const NewTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || description.trim().length === 0) return;
    createTodo(title, description);
    setFormData({
      title: "",
      description: "",
    });
  };

  const onClickButton = (func) => {
    func();
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        onChange={onChange}
        value={title}
        type="text"
        className="w-4/12 ml-2 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Título"
        id="title"
        name="title"
      />

      <input
        onChange={onChange}
        value={description}
        type="text"
        className="w-4/12 ml-2 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Descripción"
        id="description"
        name="description"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => onClickButton(removeCompleteTodo)}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-500 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline /> Eliminar completadas
      </button>
      <button
        onClick={() => onClickButton(restoreCompleteTodo)}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-orange-500 p-2 text-white hover:bg-orange-700 transition-all"
      >
        <LuFolderSymlink /> Restaurar completadas
      </button>
    </form>
  );
};
