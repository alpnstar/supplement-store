export default class {
    static recent(data, propertyName) {
        const sorted = [...data];
        sorted.sort((a, b) => {
            if (a[propertyName] > b[propertyName]) {
                return -1;
            } else if (a[propertyName] < b[propertyName]) {
                return 1;
            }
            return 0;
        })
        return sorted;

    }

    static eldest(data, propertyName) {
        const sorted = [...data];
        sorted.sort((a, b) => {
            if (a[propertyName] < b[propertyName]) {
                return -1;
            } else if (a[propertyName] > b[propertyName]) {
                return 1;
            }
            return 0;
        })
        return sorted;

    }
}