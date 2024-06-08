const milks = "leche|prea?pa?rado l[áa]cteo"
const eggs = "huevos"

const StoreRoomMilksEggsPatterns = {
  Leche: new RegExp(`${milks}`, "gi"),
  Huevos: new RegExp(`${eggs}`, "gi"),
};

export default StoreRoomMilksEggsPatterns;
