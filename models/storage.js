var storage = {
    set(key, value) {
        if (key == null ||
            value == null) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        if (key == null) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        if (key == null) {
            return;
        }
        localStorage.removeItem(key);
    }
}

export default storage;