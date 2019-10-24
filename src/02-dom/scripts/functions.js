const functions = {
    divClickFunction: () => {
        let divPosition = event.target;
        console.log(divPosition);
        return 0;
    },

    showButtonFunc: () => {
        let children = olTag.children;
        for (let element of children) {
            console.log(element.innerHTML);
        };
        return 4;
    },
}


export default functions;