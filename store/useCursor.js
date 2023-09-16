import { defineStore } from "pinia";

export const useCursor = defineStore("cursor", () => {
  const formCursor = ref("");
  function handleChangeFormCursor(d) {
    formCursor.value = d;
  }
  return { formCursor, handleChangeFormCursor };
});
