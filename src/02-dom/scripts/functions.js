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

    addButtonFunction: () => {
        console.log("add button")
        const newListItem = document.createElement('li');
        newListItem.innerHTML = "Next thing";
        let list = document.getElementById('olTag');
        list.insertBefore(newListItem, list.childNodes[0]);
        return 9;
    }
}


export default functions;