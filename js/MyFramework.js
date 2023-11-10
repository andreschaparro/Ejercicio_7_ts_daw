class MyFramework {
    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id) {
        let el;
        el = document.getElementById(id);
        return el;
    }
    /**
     * getElementByEvent: Busca un elemento del DOM por su Event
     * @param evt : Event a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementByEvent(evt) {
        return evt.target;
    }
}
