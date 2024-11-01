
export function setLocalStorageItem<T>(key: string, value: T): void {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error("Ошибка при записи в localStorage:", error);
    }
}


export function getLocalStorageItem<T>(key: string): T | null {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) return null;
        return JSON.parse(serializedValue) as T;
    } catch (error) {
        console.error("Ошибка при чтении из localStorage:", error);
        return null;
    }
}


export function removeLocalStorageItem(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Ошибка при удалении из localStorage:", error);
    }
}
