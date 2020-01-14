import vue from "vue"

var v = new vue;

var messageExchange = {
    emitmsg(objectname, params) {
        v.$emit(objectname, params);
    },
    onmsg(objectname, params) {
        v.$on(objectname, params);
    }
}

export default messageExchange;