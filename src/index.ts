type Action = "set" | "remove" | "update";

export function stgManager<T>(action: Action, key: string, value?: T): void {
  if (typeof window === "undefined") return;

  try {
    switch (action) {
      case "set":
      case "update":
        if (action === "update" && !localStorage.getItem(key)) return;
        localStorage.setItem(key, JSON.stringify(value));
        break;
      case "remove":
        localStorage.removeItem(key);
        break;
      default:
        throw new Error(`Invalid action: ${action}`);
    }
  } catch (error) {
    console.error(`LocalStorage Error (${action}):`, error);
  }
}

export function getStg<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : null;
  } catch (error) {
    console.error("Error parsing localStorage value:", error);
    return null;
  }
}

export function clearStg(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
}
