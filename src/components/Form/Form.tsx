import { FiSearch } from "react-icons/fi";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

import style from "./Form.module.css";

// Типізація пропсів
interface FormProps {
  onSubmit: (query: string) => void;
}
export default function Form({ onSubmit }: FormProps) {
  // Обробник події сабміту форми
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const query = input.value.trim();
    // Валідація - якщо поле порожнє, не викликаємо onSubmit
    if (!query) {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
