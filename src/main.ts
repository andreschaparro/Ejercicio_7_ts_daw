class Main implements EventListenerObject {
    private _myf:MyFramework;
    private _counter:number = 0;

    handleEvent(evt:Event): void {
        this._counter++;
        let btn:HTMLElement = this._myf.getElementByEvent(evt);
        btn.textContent = `click: ${this._counter}`;
    }

    main(): void {
        this._myf = new MyFramework();
        let b:HTMLElement = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};