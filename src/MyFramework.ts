class MyFramework {
    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id:string): HTMLElement {
        let el:HTMLElement;
        el = document.getElementById(id);
        return el;
    }
    /**
     * getElementByEvent: Busca un elemento del DOM por su Event
     * @param evt : Event a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementByEvent(evt:Event): HTMLElement {
        return <HTMLElement>evt.target;
    }
}