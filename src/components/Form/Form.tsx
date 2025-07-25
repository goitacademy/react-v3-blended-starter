import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (query: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("search") as string;
    if (query === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form action={handleSubmit} className={style.form}>
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
    </>
  );
}
